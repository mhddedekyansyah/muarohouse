"use client"
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RoomLists from "@/components/roomlists";
import { Suspense } from "react";
import { useEffect, useState, useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Filter from "@/components/filter";
import Header from "@/components/header";
import Facilities from "@/components/facilities";
import { location } from "@/constant";


// Function to fetch data from an API
// async function fetchDataRoom() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`);
//   const data = await response.json();
//   return data;
// }

async function fetchDataLocation() {
  try {
    const response = await fetch('https://mkapi.hosts.my.id/api/v1/init?host=muarohouse.com', {
      method: "GET",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        // "x-api-key": "62041012f8817b32a6463647baddc024"
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error", error)
  }
}



export default function Home() {
  const initialRoom = 10
  const incrementalRoom = 10
  const [dataRoom, setDataRoom] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [dataLocations, setDataLocations] = useState([])
  const [isLoadingLocation, setLoadingLocation] = useState(false)

  // setup Aos
  useEffect(() => {

    Aos.init({
      // Global settings
      offset: 200, // offset (in px) from the original trigger point
      duration: 500, // duration (in ms) of the animation
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });

  }, [])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(prev => !prev)
  //     const data = await fetchDataRoom()

  //     console.log(data)
  //     setDataRoom(data)
  //     setLoading(prev => !prev)
  //   }

  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoadingLocation(prev => !prev)
      try {
        const response = await fetch('https://mkapi.hosts.my.id/api/v1/init?host=muarohouse.com', {
          mode: "no-cors",
          headers: {
            "Accept": "application/json",
          },
        })
        const data = await response.text()
        console.log(`response => ${data}`)
      } catch (error) {
        console.log("err", error)
      }
      // setDataLocations(data)
      // setLoadingLocation(prev => !prev)
    }

    fetchData()
  }, [])

  const onClick = useCallback(async () => {
    // setLoading(prev => !prev)
    // const newData = await fetchDataRoom()
    // setData([...dataRoom, ...newData])
    // setLoading(prev => !prev)
  }, [dataRoom, isLoading])

  return (
    <main className="min-h-screen mx-auto relative bg-white">
      <Navbar />
      <Hero />

      <Header />
      <div className="relative">
        <Filter />
        <RoomLists initialData={dataRoom} isLoading={isLoading} onClick={onClick} />

      </div>
      {/* <Facilities data={dataLocations} isLoading={isLoadingLocation} /> */}
      <Footer />
    </main>
  );
}
