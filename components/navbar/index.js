"use client"

import Link from 'next/link'
import Logo from '../logo'
import { navlinks } from '@/constant'
import { useState, useEffect } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation'
import { RiMenu3Line } from "react-icons/ri";

const Navbar = ({ wa }) => {
    const [nav, setNav] = useState(false)
    const [background, setBackground] = useState(false)

    const toggle = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const pathname = usePathname()
    return (
        <>
            <nav className={`sticky top-0 z-50 bg-white shadow-lg`} >
                <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <div className="flex items-center justify-between h-[80px]">
                        <div className="flex items-center justify-between w-full">

                            {/* Logo */}
                            <Logo />

                            {/* btn show menu mobile */}
                            <div className="block md:hidden">
                                <button onClick={toggle} className="text-white focus:outline-none">
                                    {nav ? <IoMdClose className='text-black' /> : <RiMenu3Line className='text-black' />
                                    }
                                </button>
                            </div>

                            {/* primary menu */}
                            <div className='space-x-16 hidden md:block'>{navlinks.map(nav => {
                                const active = pathname == nav.href
                                return (
                                    <Link href={nav.href} key={nav.id} className={`${active ? 'text-black font-semibold' : 'text-gray-500'} hover:text-gray-300 text-[16px]`}>{nav.label}</Link>
                                )
                            })}
                                <Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${wa}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai`} className="btn-md btn-primary">Whatsapp kami</Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* mobile menu */}
                {nav && <div className='bg-white p-5 transition ease-out duration-500 absolute z-20 w-full md:hidden shadow-xl'>{navlinks.map(nav => {
                    const active = pathname == nav.href
                    return (
                        <Link key={nav.id} href={nav.href} onClick={toggle} className={`flex py-3 font-semibold`}>{nav.label}</Link>
                    )
                })}
                    <div className="w-full mx-auto">
                        <Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${wa}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%Muaro%House`} className="btn-md w-full btn-primary flex justify-center mt-10 rounded-lg">Whatsapp kami</Link>
                    </div>

                </div>}
            </nav >
        </>
    )
}

export default Navbar