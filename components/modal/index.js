import React, { memo, useState } from 'react';
import { Modal, Carousel } from 'flowbite-react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"
import Link from 'next/link'
import { RenderTagHtml } from '../rendertaghtml';
import { Dropdown } from 'flowbite-react';

const ModalRoom = ({ isOpen, onClose, data, wa }) => {
    if (!isOpen) return null;

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(data.images.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === data.images.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    const loc = (data) => {
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
        <Modal show={isOpen}>
            <Modal.Body>

                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
                    <Carousel>
                        {data.images ? data.images.map((image, i) => (
                            <img src={image} alt="..." key={i} />
                        )) : <img src='/tipex.webp' alt="..." />}

                    </Carousel>
                </div>


                <div className="space-y-1">

                    <div className="badge badge-success text-white">Lokasi {loc(data)}</div>
                    <h2 className='text-[24px] text-[#101828]'>{data.name}</h2>
                    <h2>{data.type}</h2>
                    <h3 className='text-green-600 text-[24px] font-semibold'>{data.total} Tersedia</h3>
                    <hr />
                    <h2 className='text-gray-700 text-[14px] font-semibold'>Deskripsi Kamar</h2>
                    {data.additional_description ? <RenderTagHtml children={data.additional_description} className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light' /> : '-'}
                    <hr />
                    <ol>
                        <li>
                            <h2 className='text-gray-700 text-[14px] font-semibold'>Fasilitas</h2>
                            <ul className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light grid grid-cols-2 gap-3'>
                                {data.facilities.map(facility => (
                                    <li>{facility}</li>
                                ))}
                            </ul>
                        </li>
                    </ol>

                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className="flex justify-center space-x-3 mx-auto">
                    <button onClick={onClose} className=" btn-primary bg-white text-black hover:bg-gray-200 rounded-[8px] flex justify-center items-center border border-solid border-gray-300">Tutup</button>
                    {/* <Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${wa}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20di%20${loc(data)}...`} className="min-w-full btn-primary md:w-32 btn-sm text-xs rounded-md flex justify-center items-center">Whatsapp</Link> */}
                    <Dropdown label="Whatsapp" style={{ backgroundColor: "#0E4473" }} dismissOnClick={false}>
                        {wa && Array.from(wa)?.map(w => (
                            <Dropdown.Item><Link target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${w}&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai%20${data.name}%20${loc(data)}...`} className="text-xs">{w}</Link></Dropdown.Item>
                        ))}
                    </Dropdown>
                </div>
            </Modal.Footer>

        </Modal>
    );
};

export default memo(ModalRoom);
