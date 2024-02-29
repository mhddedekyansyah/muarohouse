"use client"

import React from 'react'
import { Carousel } from 'flowbite-react';

const Hero = () => {

    return (
        <>
            <Carousel>
                <img src='/banner.webp' alt='Banner hero' className='w-full' />
                <img src='/banner.webp' alt='Banner hero' className='w-full' />
                <img src='/banner.webp' alt='Banner hero' className='w-full' />
            </Carousel>
        </>
    )
}

export default Hero