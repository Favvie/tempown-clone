import React from 'react'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { AiFillStar } from 'react-icons/ai'
import Red from '../../assets/red.png'
import { HiLocationMarker } from 'react-icons/hi'
import ReeddiCapsule from '../../assets/reddi_capsule.png'

const RecommendSection = () => {
    const data = [
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
        { "image": ReeddiCapsule, "title": 'Reeddi BigEnergy', "location":"Kosofe LA", "price": "N500" },
    ]
  return (
     <section className='container px-4 mx-auto '>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Recommended for you</h2>

                <Swiper
                    className="my-swiper-container my-20"
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={20}
                
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3.9,
                            spaceBetween: 30,
                        },
                    }}
                
                >
                   
              {
                  data.map((item, index) => {
                      return (
                        <SwiperSlide key={index} className='cursor-pointer'>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img loading='lazy' src={item.image} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img loading='lazy' src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                                      <h4 className='font-semibold py-3'>{ item.title}</h4>
                            <div className='flex items-center justify-between w-full'>
                                          <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]' /> <span>{ item.location}</span></div>
                                <span className='text-primary text-sm font-semibold'>{item.price}<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                   )
               })   
              }
                   
                </Swiper>


            </section>
  )
}

export default RecommendSection