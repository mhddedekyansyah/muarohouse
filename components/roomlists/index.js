'use client';

import { useState, Suspense, useCallback, memo } from 'react';
import ModalRoom from '../modal';

const RoomLists = ({ initialData, isLoading, onClick }) => {
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

        <div className='-mt-36 md:-mt-16 -z-10 bg-[url("/background_produk.webp")] py-44' data-aos="fade-up" id='rooms'>
            {/* card primary */}

            <div className="md:block mx-auto">
                <div className="flex flex-wrap justify-center">

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
                    {Array.from(initialData)?.map((d) => (
                        <p key={d.id}>{d.id}{d.title}</p>

                    ))}

                    {/* </Suspense> */}

                </div>
                <button onClick={onClick} className='btn-primary rounded-[8px] block mx-auto mt-10 text-white'>{isLoading ? "Loading" : "Muat lebih banyak"}</button>
            </div>
        </div >

    )
}

export default memo(RoomLists)