
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll";
import axios from "axios";
import Home from "./page";
import { data } from "autoprefixer";


const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`)

    const meta = res.data.data

    return {
      title: meta.name ?? "Muaro House",
      description: meta.seos.meta_description ?? "Muaro House",
      keywords: "",
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


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowX: "hidden" }}>

        <Home />
        <ScrollToTop />
      </body>
    </html>
  );
}
