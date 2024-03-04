"use client"

import React, { useState, memo } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const Filter = ({ locations, onClickFilter }) => {
    const [location, setLocation] = useState("")
    const [tipe, setTipe] = useState("")
    const [resetType, setResetType] = useState(true)
    const [types, setTypes] = useState([])

    const onChangeLoc = (e) => {
        console.log("locations", locations)
        // setResetType(prev => !prev)
        setLocation(e.target.value)
        const data = locations?.filter(location => location.code == e.target.value)


        console.log("data filter", data)

        setTypes(data)
        setTipe("")
    }

    const onChangeTypeRoom = (e) => {

        setTipe(e.target.value)
    }

    return (

        <div className='relative z-40'>
            <div className='mx-5'>
                <div className="w-[100%] h-[260px] md:h-[140px] bg-white rounded-xl shadow-lg p-5 md:flex md:justify-center md:items-center md:space-x-3">
                    <label className="form-control w-full max-w-full md:w-52">
                        <div className="label">
                            <span className="label-text">Lokasi</span>
                        </div>
                        <div className="relative inline-flex ">
                            <select className="select select-bordered px-7 w-full" value={location} onChange={onChangeLoc}>
                                <option value="" >Semua</option>
                                {Array.from(locations)?.map(loc => (
                                    <option key={loc.code} value={loc.code}>{loc.name}</option>
                                ))}
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
                        <div className="relative inline-flex">
                            <select className="select select-bordered px-7 w-full" value={tipe} onChange={onChangeTypeRoom}>
                                <option value="" >Semua</option>
                                {location && types?.map(type => {
                                    return type.unit_types.map(u => (<option key={u.code} value={u.code}>{u.name}</option>))
                                })
                                }
                            </select>

                            <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">

                                <MdApartment className='text-[#0E4473]' />
                            </div>
                        </div>
                    </label>
                    <div className="mt-2 md:mt-8">
                        <button onClick={() => onClickFilter(location, tipe)} className='w-full btn-primary  rounded-md btn-md flex justify-center items-center'>Ayo cari</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default memo(Filter)