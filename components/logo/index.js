import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo_header_muaro.webp'

const Logo = () => {
    return (
        <div className='text-black font-semibold text-[22px]'>
            <Image src={logo} alt='Logo' className='w-[75%] md:w-[162px] md:h-[60px]' />
        </div>
    )
}

export default Logo