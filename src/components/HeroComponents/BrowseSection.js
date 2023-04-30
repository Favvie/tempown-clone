import React from 'react'

import Energy from '../../assets/energy.webp'
import Agric from '../../assets/agriculture.webp'
import VR from '../../assets/vr.webp'
import Construction from '../../assets/construction.webp'
import Media from '../../assets/media.webp'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const BrowseSection = () => {
    const CategoryImages = [
        { "name": Energy, "altText": 'Energy', "color": "bg-[#f1f3f3]" },
        { "name": Media, 'altText': 'Media', "color": "bg-[#edffff]" },
        { "name": Agric, 'altText': 'Agriculture', "color": "bg-[#F3FCED]"},
        { 'name': Construction, 'altText': 'Construction', "color": "bg-[#fff3f0]" },
        { 'name': VR, "altText": 'General', "color": "bg-[#F1F7FF]" }]

    return (
        <Swiper
                    className="my-swiper-container"
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
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                >
                {
                            CategoryImages.map((image, index) => {
                                return (
                                    <SwiperSlide key={index} className='cursor-pointer'>
                                        <div className='relative filter hover:sepia hover:scale-105 transition-all ease-linear'>
                                            <div>
                                                <img loading='lazy' src={image.name} alt={image.altText} className="rounded-t-2xl"/>
                                            </div>
                                        <div className={`font-semibold p-4 ${image.color} rounded-b-2xl`}>{image.altText}</div>
                                        </div>
                                    </SwiperSlide>
                                        )
                            })
                        }
                    
                
                    
                    
                </Swiper>
        
    )
}
export default BrowseSection