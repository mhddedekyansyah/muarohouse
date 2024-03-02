'use client';

import { useState, Suspense, useCallback, memo } from 'react';
import ModalRoom from '../modal';

const RoomLists = ({ units, isLoading }) => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);

    const onClose = useCallback(() => {
        setData(null)
        setOpenModal(prev => !prev)
    }, [openModal, data])

    const onOpenModal = useCallback((data) => {

        setData(data)

        setOpenModal(prev => !prev)



    }, [openModal, data])

    const datas = [
        {
            "images": [
                "/tipex.webp",
                "/tipey.webp",
                "/tipez.webp"
            ],
            "type": "Kamar Y",
            "available": "8",
            "price": "1.400.000",
            "address": "Lokasi 1",
            "facalities": [
                "Fasilitas 1",
                "Fasilitas 2",
                "Fasilitas 3",
                "Fasilitas 4",
                "Fasilitas 5",
                "Fasilitas 6",

            ]
        },
        {
            "images": [
                "/tipex.webp",
                "/tipey.webp",
                "/tipez.webp"
            ],
            "type": "Kamar X",
            "available": "8",
            "price": "1.400.000",
            "address": "Lokasi 2",
            "facalities": [
                "Fasilitas 1",
                "Fasilitas 2",
                "Fasilitas 3",
                "Fasilitas 4",
                "Fasilitas 5",
                "Fasilitas 6",

            ]
        },
        {
            "images": [
                "/tipex.webp",
                "/tipey.webp",
                "/tipez.webp"
            ],
            "type": "Kamar Z",
            "available": "8",
            "price": "1.400.000",
            "address": "Lokasi 3",
            "facalities": [
                "Fasilitas 1",
                "Fasilitas 2",
                "Fasilitas 3",
                "Fasilitas 4",
                "Fasilitas 5",
                "Fasilitas 6",

            ]
        },
    ]


    return (

        <>
            {/* modal room */}
            <ModalRoom isOpen={openModal} onClose={onClose} data={data} />

            {/* <Suspense fallback={<p>Loading...</p>}> */}
            {/* {datas.map((d) => {
                        return <div role='button' className="card w-80 m-2 bg-base-100 shadow-2xl" >
                            <figure><img onClick={() => onOpenModal(d)} src="/tipex.webp" alt="TipeX" /></figure>
                            <div className="card-body">
                                <div className='space-y-2' onClick={() => onOpenModal(d)}>
                                    <div className="badge badge-success text-white">{d.address}</div>
                                    <h2 className="card-title">{d.type}</h2>
                                    <h3 className='text-green-600 text-[24px] font-semibold'>{d.available} Tersedia</h3>
                                    <ol>
                                        <li>
                                            <p className='text-gray-700 text-[14px] font-semibold'>Fasilitas</p>
                                            <ul className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light'>
                                                {d.facalities.slice(0, 3).map(facility => (
                                                    <li>{facility}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ol>
                                    <h1 className='font-smibold text-[#101828] text-[24px]'>Rp{d.price}</h1>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className=" btn-primary text-white flex justify-center grow rounded-[8px]">WhatsApp Sekarang</button>
                                </div>
                            </div>
                        </div>
                    })} */}
            {units && Object.keys(units).map((key, index) => {
                if (units.hasOwnProperty(key)) {
                    return Array.from(units[key]).map((data, i) => {
                        const loc = () => {
                            switch (data.locationcode) {
                                case 'PC':
                                    return 'Pancing'
                                case 'TS':
                                    return 'Tuasan'
                                case 'TA':
                                    return 'Tuamang'
                                default:
                                    return "None"
                            }
                        }
                        return <div className="card w-80 m-2 bg-base-100 shadow-2xl" key={i}>
                            <figure><img src={`${data.image ?? "/tipex.webp"}`} alt="TipeX" /></figure>
                            <div className="card-body">
                                <div className='space-y-2'>
                                    <div className="badge badge-success text-white">Lokasi {loc(data)}</div>
                                    <h2 className="card-title">{data.name}</h2>
                                    <h3 className='text-green-600 text-[24px] font-semibold'>{data.total} Tersedia</h3>
                                    <ol>
                                        <li>
                                            <p className='text-gray-700 text-[14px] font-semibold'>Fasilitas</p>
                                            <ul className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light'>
                                                {data.facilities.slice(0, 3).map((facility, i) => (
                                                    <li key={i}>{facility}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ol>

                                </div>
                                <div className="grid grid-flow-col gap-3">

                                    <button onClick={() => onOpenModal(data)} className="w-full btn btn-sm bg-white  text-[#344054] flex  justify-center text-xs rounded-[8px]">Lihat Detail</button>

                                    <button className="w-full btn-primary btn-sm text-white flex  justify-center text-xs rounded-[8px]">WhatsApp</button>

                                </div>
                            </div>
                        </div>
                    })
                }
            })}

            {/* </Suspense> */}

        </>

    )
}

export default memo(RoomLists)