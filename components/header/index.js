import React from 'react'
import { Unna } from "next/font/google";
import { RenderTagHtml } from '../rendertaghtml';



const unna = Unna({ subsets: ["latin"], weight: ['400'] });

const Header = ({ children }) => {
    console.log("children ", children)
    return (
        <div className='bg-white py-[70px] text-center'>
            {/* <div className="text-center">
                <h2 className={`${unna.className} font-semibold text-[20px] md:text-[36px] text-[#0E4473]`}>Cari Hunian di Medan? Muara House Aja!</h2>
                <p className='text-[#475467] text-[10px] md:text-[20px]'>Silahkan cari hunian yang sesuai dengan Kamu dari Tiga Lokasi Muara House <span className='block'>di Kota Medan.</span></p>
            </div> */}

            {children ? Array.from(children).map(child => (
                <RenderTagHtml children={child.contents.id} key={child._id} />
            )) : <div className='grid gap-3 w-full'>
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-full"></div>
            </div>
            }

        </div>
    )
}

export default Header