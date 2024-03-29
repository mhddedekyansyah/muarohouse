import React from 'react'
import { Unna } from "next/font/google";
import { RenderTagHtml } from '../rendertaghtml';



const unna = Unna({ subsets: ["latin"], weight: ['400'] });

const Header = ({ children }) => {

    return (
        <div className='bg-white py-[70px] text-center'>

            {children && Array.from(children).map(child => (
                <RenderTagHtml children={child.contents.id} key={child._id} />
            ))
            }

        </div>
    )
}

export default Header