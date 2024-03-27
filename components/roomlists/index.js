'use client';

import { useState, Suspense, useCallback, memo } from 'react';
import ModalRoom from '../modal';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import { Modal, Carousel } from 'flowbite-react';
import { RenderTagHtml } from '../rendertaghtml';

const RoomLists = ({ units, isLoading, wa }) => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);
    // const [was, setWas] = useState(null);

    const onClose = useCallback(() => {
        setData(null)

        setOpenModal(prev => !prev)
    }, [openModal, data])

    const onOpenModal = useCallback((data, was) => {

        setData(data)
        // setWas(was)
        setOpenModal(prev => !prev)



    }, [openModal, data])


    return (

        <>
            {/* modal room */}
            <ModalRoom isOpen={openModal} onClose={onClose} data={data} wa={wa} />

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
                        return (
                            <div key={i} className="card w-[1200px] bg-base-100 shadow-xl">
                                <div className="md:flex">
                                    <div className="h-56 md:min-h-full md:w-[388px] w-full">
                                        {data.images ? <Carousel pauseOnHover>
                                            {data.images && data.images.map((image, i) => (
                                                <img src={image} alt="..." key={i} className='min-h-full' />
                                            ))}
                                        </Carousel> : <img src='/tipex.webp' alt="..." className='min-h-full rounded-lg' />}

                                    </div>
                                    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 w-full">
                                        <div className="md:flex md:col-span-2">
                                            <div className="p-[12px] w-full">
                                                <div className={`badge ${data.locationcode == 'TA' ? 'bg-[#D2972F]' : data.locationcode == 'TS' ? 'bg-[#0891B2]' : 'bg-[#0D9488] '} p-3 text-white`}>
                                                    Lokasi {loc(data)}
                                                </div>
                                                <h2 className="card-title mt-2">{data.name}</h2>
                                                <h3 className={`${data.total == 0 ? 'text-red-600' : 'text-green-600'} text-[24px] font-semibold`}>{data.total} Tersedia</h3>
                                                <hr />
                                                <ol>
                                                    <li>
                                                        <p className='text-gray-700 text-[14px] font-semibold'>Fasilitas</p>
                                                        <ul className='mt-1 list-disc list-inside text-[#475467] font-light grid grid-cols-2 gap-1'>
                                                            {data.facilities.map((facility, i) => (
                                                                <li key={i} className='text-sm'>{facility}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="border-l-2 h-full hidden md:block"></div>
                                        </div>
                                        <hr className='md:hidden' />
                                        <div className="p-[12px]">
                                            <h2 className='text-gray-700 text-[14px] font-semibold'>Harga</h2>
                                            {data.additional_description ? <RenderTagHtml children={data.additional_description} className='mt-1 list-disc list-inside text-[#475467] font-light' /> : '-'}
                                        </div>

                                        <div className="md:place-self-end p-[12px]">
                                            <Dropdown label="Whatsapp" className='col-span-2' size='sm' style={{ backgroundColor: "#0E4473", paddingLeft: '20px', paddingRight: '20px', width: '100%' }} dismissOnClick={false}>
                                                {wa && Array.from(wa)?.map((w, i) => (
                                                    <Dropdown.Item key={i}><Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${w}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20${loc(data)}...`} className="text-xs">{w}</Link></Dropdown.Item>
                                                ))}
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )

                        // <div className="card m-2 bg-base-100 shadow-2xl" key={i} >



                        //     <Carousel className='w-full'>
                        //         {data.images ? data.images.map((image, i) => (
                        //             <img src={image} alt="..." key={i} />
                        //         )) : <img src='/tipex.webp' alt="..." />}

                        //     </Carousel>

                        //     <div className="card-body">
                        //         <div className='space-y-2'>

                        //             <div className="badge badge-success text-white">Lokasi {loc(data)}</div>
                        //             <h2 className="card-title">{data.name}</h2>
                        //             <h3 className='text-green-600 text-[24px] font-semibold'>{data.total} Tersedia</h3>
                        //             <ol>
                        //                 <li>
                        //                     <p className='text-gray-700 text-[14px] font-semibold'>Fasilitas</p>
                        //                     <ul className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light'>
                        //                         {data.facilities.slice(0, 3).map((facility, i) => (
                        //                             <li key={i}>{facility}</li>
                        //                         ))}
                        //                     </ul>
                        //                 </li>
                        //             </ol>

                        //         </div>
                        //         <div className="grid grid-flow-col gap-3 mx-auto">

                        //             <button onClick={() => onOpenModal(data)} className="btn bg-white  text-[#344054] flex  justify-center text-xs rounded-[8px]">Lihat Detail</button>

                        //             <Dropdown label="Whatsapp" size='sm' style={{ backgroundColor: "#0E4473" }} dismissOnClick={false}>
                        //                 {wa && Array.from(wa)?.map((w, i) => (
                        //                     <Dropdown.Item key={i}><Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${w}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20${loc(data)}...`} className="text-xs">{w}</Link></Dropdown.Item>
                        //                 ))}
                        //             </Dropdown>
                        //         </div>
                        //     </div>
                        // </div>
                    })
                }
            })}



        </>

    )
}

export default memo(RoomLists)