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

// const fetchInit = async () => {

//   try {
//     let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`,
//       { cache: 'no-store' }
//     )
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data init')
//     }

//     // setDataInit(resJson.responseJson.data)
//     return res.json()
//     // console.log("init", resJson.responseJson.data)
//   } catch (error) {
//     console.log("err", error)
//   }
//   // await fetch('api/init')
//   //   .then(({ data }) => {
//   //     setDataInit(data.data)
//   //     console.log("res init", data)
//   //   })
//   //   .catch(err => {
//   //     console.log("err", err)
//   //   })

// }

// const fetchBanner = async (secretkey) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/banner`, {
//       cache: 'no-store',
//       headers: {
//         "x-api-key": secretkey
//       }
//     })

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data section')
//     }

//     // setDataInit(resJson.responseJson.data)
//     return res.json()

//   } catch (error) {
//     console.log("err", error)
//   }
// }
// const fetchSection = async (secretkey) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/section`, {
//       cache: 'no-store',
//       headers: {
//         "x-api-key": secretkey
//       }
//     })

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data section')
//     }

//     // setDataInit(resJson.responseJson.data)
//     return res.json()

//   } catch (error) {
//     console.log("err", error)
//   }
// }

// const fetchLocation = async (secretkey) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/location`, {
//       cache: 'no-store',
//       headers: {
//         "x-api-key": secretkey
//       }
//     })

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data location')
//     }

//     // setDataInit(resJson.responseJson.data)
//     return res.json()

//   } catch (error) {
//     console.log("err", error)
//   }
// }

export default function Home({ init }) {
  // const init = await fetchInit()

  // const sectionData = fetchSection(init.data.secretkey)
  // const bannerData = fetchBanner(init.data.secretkey)
  // const locationData = fetchLocation(init.data.secretkey)

  // const [section, location, banners] = await Promise.all([sectionData, locationData, bannerData])
  // let imgMobile = Array.from(banners.data).filter(data => data.type == 'mobile') ?? []

  // let imgDesktop = Array.from(banners.data).filter(data => data.type == 'desktop') ?? []

  // let locations;
  // const [TA, TS, PC] = location.data
  // TA.facilities = [
  //   {
  //     "name": "Wifi",
  //     "icon": "/wifi.svg"
  //   },
  //   {
  //     "name": "Cctv",
  //     "icon": "/camera.svg"
  //   },
  //   {
  //     "name": "Ruang Jemur",
  //     "icon": "/jemur.svg"
  //   },
  //   {
  //     "name": "Ruang Santai",
  //     "icon": "/balcony.svg"
  //   },
  //   {
  //     "name": "Parkir Mobil",
  //     "icon": "/car.svg"
  //   },
  //   {
  //     "name": "Parkir Motor",
  //     "icon": "/two_wheleer.svg"
  //   },
  //   {
  //     "name": "Security",
  //     "icon": "/security.svg"
  //   },
  // ]

  // TS.facilities = [
  //   {
  //     "name": "Wifi",
  //     "icon": "/wifi.svg"
  //   },
  //   {
  //     "name": "Cctv",
  //     "icon": "/camera.svg"
  //   },
  //   {
  //     "name": "Ruang Jemur",
  //     "icon": "/jemur.svg"
  //   },

  //   {
  //     "name": "Parkir Motor",
  //     "icon": "/two_wheleer.svg"
  //   },
  //   {
  //     "name": "Penjaga Kos",
  //     "icon": "/dry_cleaning.svg"
  //   },
  // ]

  // PC.facilities = [
  //   {
  //     "name": "Wifi",
  //     "icon": "/wifi.svg"
  //   },
  //   {
  //     "name": "Cctv",
  //     "icon": "/camera.svg"
  //   },
  //   {
  //     "name": "Ruang Jemur",
  //     "icon": "/jemur.svg"
  //   },

  //   {
  //     "name": "Parkir Motor",
  //     "icon": "/two_wheleer.svg"
  //   },
  //   {
  //     "name": "Penjaga Kos",
  //     "icon": "/dry_cleaning.svg"
  //   },
  // ]

  // locations = [TA, TS, PC]

  const [dataInit, setDataInit] = useState(init)
  const [isUnitLoading, setUnitLoading] = useState(false)
  const [locationcode, setLocationcode] = useState("")
  const [code, setCode] = useState("")
  const [dataLocations, setDataLocations] = useState([])
  const [banners, setBanners] = useState([])
  const [imgMobile, setImgMobile] = useState([])
  const [imgDesktop, setImgDesktop] = useState([])
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

  // useEffect(() => {

  //   const fetchInit = async () => {

  //     try {
  //       let response = await fetch('api/init',
  //         // { cache: 'no-store' }
  //         {
  //           next: { revalidate: 1 }
  //         }
  //       )
  //       let resJson = await response.json()
  //       setDataInit(resJson.responseJson.data)
  //       console.log("init", resJson.responseJson.data)
  //     } catch (error) {
  //       console.log("err", error)
  //     }
  //     // await fetch('api/init')
  //     //   .then(({ data }) => {
  //     //     setDataInit(data.data)
  //     //     console.log("res init", data)
  //     //   })
  //     //   .catch(err => {
  //     //     console.log("err", err)
  //     //   })

  //   }

  //   fetchInit()

  // }, [])

  useEffect(() => {
    if (init) {
      const fetchLoc = async () => {
        setLoadingLocation(prev => !prev)
        await axios.get(`api/location/${init.data.secretkey}`)
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

  }, [init])

  useEffect(() => {
    if (init) {
      const fetchBanner = async () => {
        // setLoadingLocation(prev => !prev)
        await axios.get(`api/banner/${init.data.secretkey}`)
          .then(({ data }) => {
            let imgMobile = Array.from(data.data).filter(data => data.type == 'mobile') ?? []

            let imgDesktop = Array.from(data.data).filter(data => data.type == 'desktop') ?? []
            // setBanners(data.data)
            setImgMobile(imgMobile)
            setImgDesktop(imgDesktop)
          })
          .catch(err => {
            console.log("err", err)
          })

        // setLoadingLocation(prev => !prev)
      }

      fetchBanner()
    }

  }, [init])

  useEffect(() => {
    if (init) {
      const fetchUnits = async () => {
        setUnitLoading(prev => !prev)
        await axios.get(`api/rooms/${init.data.secretkey}?locationcode=${locationcode}&code=${code}`)
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

  }, [init, locationcode, code])

  useEffect(() => {
    if (init) {
      const fetchSection = async () => {
        setIsLoadingSection(prev => !prev)
        await axios.get(`api/section/${init.data.secretkey}`)
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

  }, [init])

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
      {/* <Navbar wa={init && init.data.ims.whatsapp} />
      <Suspense fallback={<p>Loading</p>}>
        <Hero imgDesktop={imgDesktop} imgMobile={imgMobile} />
      </Suspense>
      <Suspense fallback={<div className='grid gap-3 w-full'>
        <div className="skeleton h-3 w-full"></div>
        <div className="skeleton h-3 w-full"></div>
      </div>}>
        <Header children={section && section.data.top} />
      </Suspense>
      <Facilities data={locations && locations} />
      <Footer children={section && section.data.bottom} socialmedias={init && init.data.socialmedias} /> */}
      <Navbar wa={init && init.data.ims.whatsapp} />
      {
        imgDesktop.length === 0 || imgMobile.length === 0 ? Array.from({ length: 1 }, (_, index) => (
          <div className='w-full aspect-square md:aspect-[3/1]' key={index}>
            <div className='skeleton w-full h-full'></div>
          </div>
        ))
          : <Hero imgDesktop={imgDesktop} imgMobile={imgMobile} />}
      <Header children={sections && sections.top} />

      <Filter locations={dataLocations && dataLocations} onClickFilter={onClickFilter} />
      <div className='-mt-36 md:-mt-16 -z-10 bg-[url("/background_produk.webp")] px-5 py-44' id='rooms'>

        <div className="md:block mx-auto ">
          <div className="flex flex-wrap justify-center space-y-[28px]">
            {(!units || isUnitLoading) ? <div className="grid md:grid-flow-col gap-3">{Array.from({ length: 3 }, (_, index) => (
              <div className="w-80 h-80" key={index}>
                <div className="skeleton h-full w-full"></div>
              </div>
            ))}</div>
              : <RoomLists units={units && units} wa={init && init.data.ims.whatsapp} />}
          </div>
        </div>
      </div>

      <Facilities data={dataLocations && dataLocations} isLoading={isLoadingLocation} />
      <Footer children={sections && sections.bottom} socialmedias={init && init.data.socialmedias} />
    </main>
  );
}
