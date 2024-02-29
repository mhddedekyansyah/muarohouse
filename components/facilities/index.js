'use client';

import Image from 'next/image';
import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { Carousel } from 'flowbite-react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"

const facilities = [
    {
        "id": 1,
        "location": "Lokasi 1",
        "address": "Jl. Brigjend Katamso Blk. B-C No.56, Medan, Kota Medan, Sumatera Utara 20151",
        "lists": [
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Laundry",
                "icon": "/laundry.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
        ]
    },
    {
        "id": 2,
        "location": "Lokasi 2",
        "address": "Jl. Brigjend Katamso Blk. B-C No.56, Medan, Kota Medan, Sumatera Utara 20151",
        "lists": [
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Laundry",
                "icon": "/laundry.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
        ]
    },
    {
        "id": 3,
        "location": "Lokasi 3",
        "address": "Jl. Brigjend Katamso Blk. B-C No.56, Medan, Kota Medan, Sumatera Utara 20151",
        "lists": [
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Laundry",
                "icon": "/laundry.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
            {
                "name": "Wifi",
                "icon": "/wifi.svg"
            },
        ]
    },
]


const Facilities = ({ data, isLoading }) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(facilities.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === facilities.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    return (
        <>
            <div className='hidden md:flex justify-center items-center bg-white'>
                <div className='py-[60px]'>
                    <h2 className='text-[#101828] font-semibold text-[36px] mb-[40px] text-center'>Lokasi dan Fasilitas Muaro House</h2>
                    <div className="flex justify-center items-center space-x-[32px]">
                        {Array.from(data)?.map((d, i) => (
                            <div className=" w-[384px] h-[546px] bg-white rounded-[16px] border border-solid border-gray-200  shadow-md">
                                <div className="p-[16px]">
                                    <div className="flex justify-center items-center mb-[8px]">
                                        <div className="badge-full font-bold text-[28px]">1</div>
                                    </div>
                                    <h2 className='text-center text-[#101828] text-[20px] font-semibold'>Muaro House Lokasi 1</h2>
                                    <p className='text-center text-[16px] text-gray-600 mb-[16px]'>Jl. Brigjend Katamso Blk. B-C No.56, Medan, Kota Medan, Sumatera Utara 20151</p>

                                    <div className="flex items-center justify-center text-[#0E4473] font-semibold mb-[16px]"><span className='mr-2'>Google Maps</span> <FaLocationArrow /></div>
                                </div>
                                <div className="block"><hr /></div>
                                <div className="m-[20px]">
                                    <h2 className='text-[#101828] font-semibold text-[20px] mb-[20px]'>Fasilitas Umum</h2>
                                    <div className="flex">
                                        <ul className='space-y-[16px]'>
                                            <li className='text-[16px] text-gray-600 inline-flex'><Image src="/wifi.svg" alt='wifi' width={24} height={24} className='text-gray-600 mr-2' />WiFi</li>
                                            <li className='text-[16px] text-gray-600 flex'><Image src="/laundry.svg" alt='laundry' width={24} height={24} className='text-gray-600 mr-2' />R. Cuci</li>
                                            <li className='text-[16px] text-gray-600 flex'><Image src="/balcony.svg" alt='balcony' width={24} height={24} className='text-gray-600 mr-2' />R. Jemur</li>
                                            <li className='text-[16px] text-gray-600 flex'><Image src="/cooking.svg" alt='cooking' width={24} height={24} className='text-gray-600 mr-2' />Dapur</li>
                                            <li className='text-[16px] text-gray-600 flex'><Image src="/car.svg" alt='car' width={24} height={24} className='text-gray-600 mr-2' />CCTV</li>
                                            <li className='text-[16px] text-gray-600 inline-flex'><Image src="/dry_cleaning.svg" alt='dry cleaning' width={24} height={24} className='text-gray-600 mr-2' />Pengurus Kos</li>
                                        </ul>
                                        <ul className='space-y-[16px] ml-16'>
                                            <li className='text-[16px] text-gray-600 flex'><Image src="/two_wheleer.svg" alt='wheleer' width={24} height={24} className='text-gray-600 mr-2' />Parkir Motor</li>
                                        </ul>
                                    </div>
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
                    {facilities.map((data, i) => {
                        return <div className={`min-w-full bg-white rounded-[16px] border border-solid border-gray-200 shadow-md`} key={i}>
                            <div className="p-[16px]">
                                <div className="flex justify-center items-center mb-[8px]">
                                    <div className="badge-full font-bold text-[28px]">1</div>
                                </div>
                                <h2 className='text-center text-[#101828] text-[20px] font-semibold'>{data.location}</h2>
                                <p className='text-center text-[16px] text-gray-600 mb-[16px]'>Jl. Brigjend Katamso Blk. B-C No.56, Medan, Kota Medan, Sumatera Utara 20151</p>

                                <div className="flex items-center justify-center text-[#0E4473] font-semibold mb-[16px]"><span className='mr-2'>Google Maps</span> <FaLocationArrow /></div>
                            </div>
                            <div className="block"><hr /></div>
                            <div className="m-[20px]">
                                <h2 className='text-[#101828] font-semibold text-[20px] mb-[20px]'>Fasilitas Umum</h2>
                                <div className="flex">
                                    <ul className='space-y-[16px]'>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/wifi.svg" alt='wifi' width={24} height={24} className='text-gray-600 mr-2' />WiFi</li>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/laundry.svg" alt='laundry' width={24} height={24} className='text-gray-600 mr-2' />R. Cuci</li>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/balcony.svg" alt='balcony' width={24} height={24} className='text-gray-600 mr-2' />R. Jemur</li>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/cooking.svg" alt='cooking' width={24} height={24} className='text-gray-600 mr-2' />Dapur</li>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/car.svg" alt='car' width={24} height={24} className='text-gray-600 mr-2' />CCTV</li>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/dry_cleaning.svg" alt='dry cleaning' width={24} height={24} className='text-gray-600 mr-2' />Pengurus Kos</li>
                                    </ul>
                                    <ul className='space-y-[16px] ml-16'>
                                        <li className='text-[16px] text-gray-600 flex'><Image src="/two_wheleer.svg" alt='wheleer' width={24} height={24} className='text-gray-600 mr-2' />Parkir Motor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="flex justify-between items-center">
                    <div className="py-4 flex justify-center gap-3 w-full">
                        {facilities.map((s, i) => {
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

            </div >
        </>

    )

}

export default Facilities