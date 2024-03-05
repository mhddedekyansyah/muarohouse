'use client';

import { useState, Suspense, useCallback, memo } from 'react';
import ModalRoom from '../modal';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';

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
                        console.log("Data", data.images && data.images[0])
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
                        return <div className="card w-80 m-2 bg-base-100 shadow-2xl" key={i} >
                            <figure><img src={`${(data.images && data.images[0]) ?? "/tipex.webp"}`} alt="..." className='h-[218px] w-full' /></figure>
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
                                <div className="grid grid-flow-col gap-3 mx-auto">

                                    <button onClick={() => onOpenModal(data)} className="btn bg-white  text-[#344054] flex  justify-center text-xs rounded-[8px]">Lihat Detail</button>

                                    {/* <button className="w-full btn-primary btn-sm text-white flex  justify-center text-xs rounded-[8px]">WhatsApp</button> */}
                                    {/* <Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${wa}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20di%20${loc(data)}...`} className="btn-sm text-xs w-full btn-primary flex justify-center rounded-[8px]">Whatsapp</Link> */}
                                    <Dropdown label="Whatsapp" size='sm' style={{ backgroundColor: "#0E4473" }} dismissOnClick={false}>
                                        {wa && Array.from(wa)?.map(w => (
                                            <Dropdown.Item><Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${w}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20${loc(data)}...`} className="text-xs">{w}</Link></Dropdown.Item>
                                        ))}
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    })
                }
            })}



        </>

    )
}

export default memo(RoomLists)