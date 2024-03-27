
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll";
import axios from "axios";
import Home from "./page";


const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`)

    const meta = res.data.data

    return {
      title: meta.name ?? "Muaro House",
      description: meta.seos.meta_description ?? "Muaro House",
      keywords: [meta.seos.meta_keyword],
      icons: {
        icon:
          "https://s3.nl-ams.scw.cloud/izy.bucket/faf9dadf6956721cb693c1af130c7785/logos/CQmdLFR2tY0PJg6NrGOU1zk3bZ6ZMaIh5Ptk2H1I.jpeg" ||
          "",
        shortcut:
          "https://s3.nl-ams.scw.cloud/izy.bucket/faf9dadf6956721cb693c1af130c7785/logos/CQmdLFR2tY0PJg6NrGOU1zk3bZ6ZMaIh5Ptk2H1I.jpeg" ||
          "",
        apple:
          "https://s3.nl-ams.scw.cloud/izy.bucket/faf9dadf6956721cb693c1af130c7785/logos/CQmdLFR2tY0PJg6NrGOU1zk3bZ6ZMaIh5Ptk2H1I.jpeg" ||
          "",
        other: {
          rel:
            "https://s3.nl-ams.scw.cloud/izy.bucket/faf9dadf6956721cb693c1af130c7785/logos/CQmdLFR2tY0PJg6NrGOU1zk3bZ6ZMaIh5Ptk2H1I.jpeg" ||
            "",
          url:
            "https://s3.nl-ams.scw.cloud/izy.bucket/faf9dadf6956721cb693c1af130c7785/logos/CQmdLFR2tY0PJg6NrGOU1zk3bZ6ZMaIh5Ptk2H1I.jpeg" ||
            "",
        },
      },
    };

  } catch (error) {
    console.log(error)
  }

}

const fetchInit = async () => {

  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`,
      { cache: 'no-store' }
    )
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data init')
    }

    // setDataInit(resJson.responseJson.data)
    return res.json()
    // console.log("init", resJson.responseJson.data)
  } catch (error) {
    console.log("err", error)
  }
  // await fetch('api/init')
  //   .then(({ data }) => {
  //     setDataInit(data.data)
  //     console.log("res init", data)
  //   })
  //   .catch(err => {
  //     console.log("err", err)
  //   })

}

export default async function RootLayout({ children }) {
  const init = await fetchInit()

  return (
    <html lang="en">

      <body className={inter.className} style={{ overflowX: "hidden" }}>

        <Home init={init} />
        <ScrollToTop />
      </body>
    </html>
  );
}
