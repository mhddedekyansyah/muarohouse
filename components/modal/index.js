import React, { memo, useState } from 'react';
import { Modal, Carousel } from 'flowbite-react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"
import Link from 'next/link'

const ModalRoom = ({ isOpen, onClose, data }) => {
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


    return (
        <Modal show={isOpen}>
            <Modal.Body>
                {/* <div className="mb-2 w-full">
                    <div className={`flex transition ease-out duration-40`} style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}>
                        {data.images.map((image) => (
                            <img className='min-w-full h-52 object-cover' src={image}></img>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center min-w-full">
                    <div className="flex gap-3">
                        {data.images.map((s, i) => {
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
                    <div className="items-center space-x-2 flex text-gray-300 text-3xl">
                        <button onClick={previousSlide}>
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <button onClick={nextSlide}>
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>
                </div> */}

                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
                    <Carousel>
                        {data.images.map(image => (
                            <img src={image} alt="..." />
                        ))}
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                    </Carousel>
                </div>


                <div className="space-y-1">
                    <div className="badge badge-success text-white">{data.address}</div>
                    <h2>{data.type}</h2>
                    <h3 className='text-green-600 text-[24px] font-semibold'>{data.available} Tersedia</h3>
                    <ol>
                        <li>
                            <p className='text-gray-700 text-[14px] font-semibold'>Fasilitas</p>
                            <ul className='ps-5 mt-1 list-disc list-inside text-[#475467] font-light grid grid-cols-2 gap-3'>
                                {data.facalities.map(facility => (
                                    <li>{facility}</li>
                                ))}
                            </ul>
                        </li>
                    </ol>
                    <h4 className='text-[24px] text-[#101828] font-semibold'>Rp.{data.price}</h4>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="flex justify-center items-center mx-auto space-x-3">
                    <button onClick={onClose} className="btn-primary bg-white text-black hover:bg-gray-200 btn-sm rounded-[8px]">Tutup</button>
                    <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=6281997008336&amp;text=Halo,%20Saya%20ingin%20bertanya%20mengenai" className=" btn-primary w-full md:w-32 btn-sm text-xs rounded-md flex justify-center items-center">Whatsapp kami</Link>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default memo(ModalRoom);
