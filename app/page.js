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

  const [dataInit, setDataInit] = useState()
  const [isUnitLoading, setUnitLoading] = useState(false)
  const [locationcode, setLocationcode] = useState("")
  const [code, setCode] = useState("")
  const [dataLocations, setDataLocations] = useState([])
  const [banners, setBanners] = useState([])
  const [units, setUnits] = useState()
  const [sections, setSections] = useState()
  const [isLoadingSection, setIsLoadingSection] = useState(false)
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

    setLocationcode(locationcode)
    setCode(code)
  }, [location, code])

  useLayoutEffect(() => {

    const fetchInit = async () => {

      await axios.get('api/init')
        .then(({ data }) => {
          setDataInit(data.data)

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

            const [TA, TS, PC] = data.data
            TA.facilities = [
              {
                "name": "Wifi",
                "icon": "/wifi.svg"
              },
              {
                "name": "Cctv",
                "icon": "/camera.svg"
              },
              {
                "name": "Ruang Jemur",
                "icon": "/jemur.svg"
              },
              {
                "name": "Ruang Santai",
                "icon": "/balcony.svg"
              },
              {
                "name": "Parkir Mobil",
                "icon": "/car.svg"
              },
              {
                "name": "Parkir Motor",
                "icon": "/two_wheleer.svg"
              },
              {
                "name": "Security",
                "icon": "/security.svg"
              },
            ]

            TS.facilities = [
              {
                "name": "Wifi",
                "icon": "/wifi.svg"
              },
              {
                "name": "Cctv",
                "icon": "/camera.svg"
              },
              {
                "name": "Ruang Jemur",
                "icon": "/jemur.svg"
              },

              {
                "name": "Parkir Motor",
                "icon": "/two_wheleer.svg"
              },
              {
                "name": "Penjaga Kos",
                "icon": "/dry_cleaning.svg"
              },
            ]

            PC.facilities = [
              {
                "name": "Wifi",
                "icon": "/wifi.svg"
              },
              {
                "name": "Cctv",
                "icon": "/camera.svg"
              },
              {
                "name": "Ruang Jemur",
                "icon": "/jemur.svg"
              },

              {
                "name": "Parkir Motor",
                "icon": "/two_wheleer.svg"
              },
              {
                "name": "Penjaga Kos",
                "icon": "/dry_cleaning.svg"
              },
            ]

            setDataLocations([TA, TS, PC])


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

          })
          .catch(err => {
            console.log("err", err)
          })

        setUnitLoading(prev => !prev)
      }

      fetchUnits()
    }

  }, [dataInit, locationcode, code])

  useEffect(() => {
    if (dataInit) {
      const fetchSection = async () => {
        setIsLoadingSection(prev => !prev)
        await axios.get(`api/section/${dataInit.secretkey}`)
          .then(({ data }) => {
            setSections(data.data)

          })
          .catch(err => {
            console.log("err", err)
          })

        setIsLoadingSection(prev => !prev)
      }

      fetchSection()
    }

  }, [dataInit])

  useEffect(() => {

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/65e48bf48d261e1b5f67df6d/1ho2c5dbr';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

  }, [])


  return (
    <main className="min-h-screen mx-auto relative bg-white">
      <Navbar wa={dataInit && dataInit.ims.whatsapp} />
      {
        banners.length === 0 ? Array.from({ length: 1 }, (_, index) => (
          <div className='w-full aspect-square md:aspect-[3/1]' key={index}>
            <div className='skeleton w-full h-full'></div>
          </div>
        ))
          : <Hero images={banners && banners} />}
      <Header children={sections && sections.top} />

      <Filter locations={dataLocations && dataLocations} onClickFilter={onClickFilter} />
      <div className='-mt-36 md:-mt-16 -z-10 bg-[url("/background_produk.webp")] px-5 py-44' id='rooms'>
        {/* card primary */}
        <div className="md:block mx-auto ">
          <div className="flex flex-wrap justify-center space-y-[28px]">
            {(!units || isUnitLoading) ? <div className="grid md:grid-flow-col gap-3">{Array.from({ length: 3 }, (_, index) => (
              <div className="w-80 h-80" key={index}>
                <div className="skeleton h-full w-full"></div>
              </div>
            ))}</div>
              : <RoomLists units={units && units} wa={dataInit && dataInit.ims.whatsapp} />}
          </div>
        </div>
      </div>

      <Facilities data={dataLocations && dataLocations} isLoading={isLoadingLocation} />
      <Footer children={sections && sections.bottom} socialmedias={dataInit && dataInit.socialmedias} />
    </main>
  );
}
