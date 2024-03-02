"use client"

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RoomLists from "@/components/roomlists";
import { Suspense } from "react";
import { useEffect, useState, useLayoutEffect, useMemo, useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Filter from "@/components/filter";
import Header from "@/components/header";
import Facilities from "@/components/facilities";
import { location } from "@/constant";
import axios from "axios";



export default function Home() {
  const [dataInit, setDataInit] = useState(null)
  const [isUnitLoading, setUnitLoading] = useState(false)
  const [locationcode, setLocationcode] = useState("")
  const [code, setCode] = useState("")
  const [dataLocations, setDataLocations] = useState([])
  const [banners, setBanners] = useState([])
  const [units, setUnits] = useState()
  const [isLoadingLocation, setLoadingLocation] = useState(false)

  // setup Aos
  useLayoutEffect(() => {

    Aos.init({
      // Global settings
      offset: 200, // offset (in px) from the original trigger point
      duration: 500, // duration (in ms) of the animation
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });

  }, [])

  const onClickFilter = useCallback((locationcode, code) => {
    console.log(`locationcode ${locationcode} code ${code}`)
    setLocationcode(locationcode)
    setCode(code)
  }, [location, code])

  useLayoutEffect(() => {

    const fetchInit = async () => {

      await axios.get('api/init')
        .then(({ data }) => {
          setDataInit(data.data)
          // console.log("response", data.data)
        })
        .catch(err => {
          console.log("err", err)
        })

    }

    fetchInit()

  }, [])

  useEffect(() => {
    if (dataInit) {
      const fetchLoc = async () => {
        setLoadingLocation(prev => !prev)
        await axios.get(`api/location/${dataInit.secretkey}`)
          .then(({ data }) => {
            setDataLocations(data.data)
            // console.log("response locations", data.data)
          })
          .catch(err => {
            console.log("err", err)
          })

        setLoadingLocation(prev => !prev)
      }


      fetchLoc()
    }

  }, [dataInit])

  useEffect(() => {
    if (dataInit) {
      const fetchBanner = async () => {
        // setLoadingLocation(prev => !prev)
        await axios.get(`api/banner/${dataInit.secretkey}`)
          .then(({ data }) => {
            setBanners(data.data)
          })
          .catch(err => {
            console.log("err", err)
          })

        // setLoadingLocation(prev => !prev)
      }

      fetchBanner()
    }

  }, [dataInit])

  useEffect(() => {
    if (dataInit) {
      const fetchUnits = async () => {
        setUnitLoading(prev => !prev)
        await axios.get(`api/rooms/${dataInit.secretkey}?locationcode=${locationcode}&code=${code}`)
          .then(({ data }) => {
            setUnits(data.data)
            console.log(`res units ${data.data}`)
          })
          .catch(err => {
            console.log("err", err)
          })

        setUnitLoading(prev => !prev)
      }

      fetchUnits()
    }

  }, [dataInit, locationcode, code])



  return (
    <main className="min-h-screen mx-auto relative bg-white">
      <Navbar wa={dataInit && dataInit.ims.whatsapp[0]} />
      {
        banners.length === 0 ? Array.from({ length: 1 }, (_, index) => (
          <div className='w-full aspect-square md:aspect-[3/1]' key={index}>
            <div className='skeleton w-full h-full'></div>
          </div>
        ))
          : <Hero images={banners && banners} />}
      <Header />
      <div className="relative">
        <Filter locations={dataLocations && dataLocations} onClickFilter={onClickFilter} />
        <div className='-mt-36 md:-mt-16 -z-10 bg-[url("/background_produk.webp")] py-44' id='rooms'>
          {/* card primary */}
          <div className="md:block mx-auto">
            <div className="flex flex-wrap justify-center">
              {(!units || isUnitLoading) ? <div className="grid md:grid-flow-col gap-3">{Array.from({ length: 3 }, (_, index) => (
                <div className="w-80 h-80" key={index}>
                  <div className="skeleton h-full w-full"></div>
                </div>
              ))}</div>
                : <RoomLists units={units && units} />}
            </div>
          </div>
        </div>
      </div>
      <Facilities data={dataLocations && dataLocations} isLoading={isLoadingLocation} />
      <Footer wa={dataInit && dataInit.ims.whatsapp[0]} />
    </main>
  );
}
