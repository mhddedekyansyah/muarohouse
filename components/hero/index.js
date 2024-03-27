"use client"

import React from 'react'
import { Carousel } from 'flowbite-react';

const Hero = ({ imgDesktop = [], imgMobile = [] }) => {

    return (
        <>
            <div className="w-full aspect-[3/1] hidden md:block" >
                <Carousel>
                    {Array.from(imgDesktop)?.map((data, i) => {
                        return <img key={i} src={data.image != null ? data.image : '/banner.webp'} alt="..." className='object-cover w-full h-full' />
                    })}
                </Carousel>
            </div >

            < div className="w-full aspect-square md:hidden" >
                <Carousel>
                    {Array.from(imgMobile)?.map((data, i) => (
                        <img key={i} src={data.image != null ? data.image : '/banner.webp'} alt="..." className='object-cover w-full h-full' />
                    ))}
                </Carousel>
            </div >
        </>


    )
}

export default Hero