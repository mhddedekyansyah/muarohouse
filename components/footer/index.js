import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo_footer_muaro.webp'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RenderTagHtml } from '../rendertaghtml';
import { Dropdown } from 'flowbite-react';

const Footer = ({ children, socialmedias }) => {
    return (
        <>
            <footer className="footer md:footer-center bg-[url('/background_footer.webp')] py-[25px] md:py-[32px]">
                <Image src={logo} alt='Logo Footer' className='hidden md:block ml-3 text-[#D2972F]' width={240} height={90} />
                <Image src='/logo_footer_mobile.svg' alt='Logo Footer' className='md:hidden ml-3 text-[#D2972F]' width={120} height={100} />
                {/* <div className='text-[16px] ml-3 mb-[8px] md:leading-loose text-white md:text-[20px] md:mb-[16px] text-left'><p className="text-left">Cari Hunian Kost yang nyaman dan aman, hanya di Muara House.</p><span className='md:block text-left'>Yuk Booking Sekarang!</span></div> */}
                {children ? Array.from(children).map(child => (
                    <RenderTagHtml className={`text-white block md:flex`} children={child.contents.id} key={child._id} />
                )) : <div className='grid gap-3'>
                    <div className="skeleton h-3 w-full"></div>
                    <div className="skeleton h-3 w-full"></div>
                </div>}
                <nav className='footer footer-center'>
                    <div className="md:grid md:grid-flow-col md:gap-2 space-y-3 md:space-y-0 px-10 w-full md:w-1.5 md:justify-center">
                        {/* <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6281997008336&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai" className=" btn-primary w-full md:w-32  btn-sm bg-white rounded-md flex justify-center items-center"><FaFacebook className='text-blue-700' />
                            <p className='ml-3 text-black'>facebook</p>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6281997008336&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai" className=" btn-primary w-full md:w-32  btn-sm bg-white rounded-md flex justify-center items-center"><FaInstagram className='text-pink-700' />
                            <p className='ml-3 text-black'>instagram</p>
                        </Link> */}
                        {socialmedias && Object.keys(socialmedias)?.map((key, values) => (
                            <Dropdown label={key} size='sm' style={{ backgroundColor: "white", color: "black", width: "100%" }} dismissOnClick={false}>

                                {Array.from(socialmedias[key]).map((d, i) => (
                                    <Dropdown.Item key={i}><Link target="_blank" rel="noopener noreferrer" href={d} className="text-xs">{d}</Link></Dropdown.Item>
                                ))}

                            </Dropdown>
                        ))}
                    </div>
                </nav>

                <aside className='space-y-[16px] footer footer-center'>
                    <div className="h-[1px] w-80 md:w-[1216px] bg-gray-100"></div>
                    <p className='text-center text-white  font-normal text-[14px] md:text-[16px]'>© 2024 Muaro House. All rights reserved.</p>
                </aside>

            </footer>
        </>
    )
}

export default Footer