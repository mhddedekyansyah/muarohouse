'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { Carousel } from 'flowbite-react';
import { facilities } from '@/constant';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"
import { Unna } from "next/font/google";
import Link from 'next/link';


const unna = Unna({ subsets: ["latin"], weight: ['400'] });




const Facilities = ({ data, isLoading }) => {
    let [current, setCurrent] = useState(0);
    

    let previousSlide = () => {
        if (current === 0) setCurrent(data.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === data.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    return (
        <>
            <div className='hidden md:flex justify-center items-center bg-white'>
                <div className='py-[60px]'>
                    <h2 className={`${unna.className} text-[#101828] font-semibold text-[36px] mb-[40px] text-center`}>Lokasi dan Fasilitas Muaro House</h2>
                    <div className="flex justify-center items-center space-x-[32px]">
                        {(data.length === 0 || isLoading) ? Array.from({ length: 3 }, (_, index) => {
                            return <div key={index} className="flex flex-col gap-4 w-[384px] h-[500px] rounded-[16px] border border-solid border-gray-200  shadow-md">
                                <div className="skeleton h-[48px] w-[48px] rounded-full mx-auto mt-3"></div>
                                <div className="skeleton h-4 w-28 mx-auto"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-40 mx-auto"></div>
                                <div className="skeleton h-[1px] w-full mb-[16px]"></div>
                                <div className="m-[20px]">
                                    <div className="skeleton h-4 w-28 mb-[24px]"></div>
                                    <div className="flex">
                                        <ul className='space-y-[16px]'>
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                        </ul>
                                        <ul className='space-y-[16px] ml-16'>
                                            <div className="skeleton h-4 w-20"></div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }) : Array.from(data)?.map(d => (
                            <div key={d._id} className=" w-[384px] h-[500px] bg-white rounded-[16px] border border-solid border-gray-200  shadow-md">
                                <div className="p-[16px]">
                                    <div className="flex justify-center items-center mb-[8px]">
                                        <div className="badge-full font-bold text-[28px]">{d?.order ?? "1"}</div>
                                    </div>
                                    <h2 className='text-center text-[#101828] text-[20px] font-semibold'>{d?.name ?? "Muaro House Lokasi 1"}</h2>
                                    <p className='text-center text-[16px] text-gray-600 mb-[16px]'>{d?.address ?? "Jl. Tuasan"}</p>

                                    <div className="flex items-center justify-center text-[#0E4473] font-semibold mb-[16px]">{d.googlemap ? <Link target="_blank" rel="noopener noreferrer" href={d.googlemap} className='flex items-center'><span className='mr-2'>Google Maps</span> <FaLocationArrow /></Link> : <><span className='mr-2 cursor-pointer'>Google Maps</span><FaLocationArrow /></>}</div>
                                </div>
                                <div className="block"><hr /></div>
                                <div className="m-[20px]">
                                    <h2 className='text-[#101828] font-semibold text-[20px] mb-[20px]'>Fasilitas Umum</h2>
                              
                                        <ul className='grid grid-cols-2 gap-5'>
                                            {
                                                Array.from(d.facilities).map((facility, i) => (
                                                    <li key={i} className='text-[16px] text-gray-600 flex items-center'><Image src={facility.icon} alt={facility.name} width={24} height={24} className='text-gray-600 mr-2' />{facility.name}</li>
                                                ))
                                            }
                                        </ul>
                                     
                                    </div>
                                </div>
                 
                        ))}



                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden md:hidden p-5 bg-white">
                <h2 className='text-[#101828] font-semibold text-[36px] mb-[40px] text-center'>Lokasi dan Fasilitas Muaro House</h2>
                <div className={`flex transition ease-out duration-40 space-x-5`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}>
                    {(data.length === 0 || isLoading) ? Array.from({ length: 3 }, (_, index) => {
                        return <div key={index} className="flex flex-col gap-4 min-w-full h-[546px] rounded-[16px] border border-solid border-gray-200  shadow-md">
                            <div className="skeleton h-[48px] w-[48px] rounded-full mx-auto mt-3"></div>
                            <div className="skeleton h-4 w-28 mx-auto"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-40 mx-auto"></div>
                            <div className="skeleton h-[1px] w-full mb-[16px]"></div>
                            <div className="m-[20px]">
                                <div className="skeleton h-4 w-28 mb-[24px]"></div>
                                <div className="flex">
                                    <ul className='space-y-[16px]'>
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                    </ul>
                                    <ul className='space-y-[16px] ml-16'>
                                        <div className="skeleton h-4 w-20"></div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }) : Array.from(data)?.map((d, i) => {
                        return <div className={`min-w-full bg-white rounded-[16px] border border-solid border-gray-200 shadow-md`} key={i}>
                            <div className="p-[16px]">
                                <div className="flex justify-center items-center mb-[8px]">
                                    <div className="badge-full font-bold text-[28px]">{d?.order ?? "1"}</div>
                                </div>
                                <h2 className='text-center text-[#101828] text-[20px] font-semibold'>{d?.name ?? "Muaro House Lokasi 1"}</h2>
                                <p className='text-center text-[16px] text-gray-600 mb-[16px]'>{d?.address ?? "Jl. Tuasan"}</p>

                                <div className="flex items-center justify-center text-[#0E4473] font-semibold mb-[16px]">{d.googlemap ? <Link target="_blank" rel="noopener noreferrer" href={d.googlemap} className='flex items-center'><span className='mr-2'>Google Maps</span> <FaLocationArrow /></Link> : <><span className='mr-2 cursor-pointer'>Google Maps</span><FaLocationArrow /></>}</div>
                            </div>
                            <div className="block"><hr /></div>
                            <div className="m-[20px]">
                                <h2 className='text-[#101828] font-semibold text-[20px] mb-[20px]'>Fasilitas Umum</h2>

                                    <ul className='grid grid-cols-2 gap-5'>
                                    {
                                                Array.from(d.facilities).map((facility, i) => (
                                                    <li key={i} className='text-[16px] text-gray-600 flex items-center'><Image src={facility.icon} alt={facility.name} width={24} height={24} className='text-gray-600 mr-2' />{facility.name}</li>
                                                ))
                                            }
                                    </ul>
                                
                                </div>
                            </div>
              
                    })}

                </div>

                <div className="flex justify-between items-center">
                    <div className="py-4 flex justify-center gap-3 w-full">
                        {Array.from(data).map((s, i) => {
                            return (
                                <div
                                    onClick={() => {
                                        setCurrent(i);
                                    }}
                                    key={"circle" + i}
                                    className={`rounded-full w-[8px] h-[8px] cursor-pointer  ${i == current ? "bg-[#0E4372]" : "bg-gray-300"
                                        }`}
                                ></div>
                            );
                        })}
                    </div>
                    <div className="h-full w-full justify-end space-x-3 items-center flex text-gray-300 px-10 text-3xl">
                        <button onClick={previousSlide}>
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <button onClick={nextSlide}>
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Facilities