import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const Filter = () => {
    return (

        <div className='relative z-40'>
            <div className='mx-5'>
                <div className="w-[100%] h-[260px] md:h-[140px] bg-white rounded-xl shadow-lg p-5 md:flex md:justify-center md:items-center md:space-x-3">
                    <label className="form-control w-full max-w-full md:w-52">
                        <div className="label">
                            <span className="label-text">Lokasi</span>
                        </div>
                        <div className="relative inline-flex ">
                            <select className="select select-bordered px-7 w-full">
                                <option disabled selected>Lokasi</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                            <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">

                                <FaLocationDot className='text-[#0E4473]' />
                            </div>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-full md:w-52">
                        <div className="label">
                            <span className="label-text">Tipe Kamar</span>
                        </div>
                        <div className="relative inline-flex ">
                            <select className="select select-bordered px-7 w-full">
                                <option disabled selected>Tipe Kamar</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                            <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">

                                <MdApartment className='text-[#0E4473]' />
                            </div>
                        </div>
                    </label>


                    <div className="mt-2 md:mt-8">
                        <button className='w-full btn-primary  rounded-md btn-md flex justify-center items-center'>Ayo cari</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Filter