"use client"

import React from 'react'
import { Carousel } from 'flowbite-react';

const Hero = ({ images }) => {

    return (
        <>

            < div className="w-full aspect-square md:aspect-[3/1]" >
                <Carousel>
                    {Array.from(images)?.map((data, i) => (
                        <img key={i} src={data != null ? data.image : '/banner.webp'} alt="..." className='object-cover w-full h-full' />
                    ))}
                </Carousel>
            </div >
        </>


    )
}

export default Hero