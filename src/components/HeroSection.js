import React, { useState, useEffect} from 'react'
// import HeroImage from '../assets/enterprise.39f9874d.webp'
import { CiSearch } from 'react-icons/ci'
import Reeddi from '../assets/reeddi.svg'
import { BsArrowUpRight, BsArrowRight} from 'react-icons/bs'
// import { BsArrowUpRight, BsArrowRight, BsApple, BsAndroid2} from 'react-icons/bs'
import Energy from '../assets/energy.webp'
import Agric from '../assets/agriculture.webp'
import VR from '../assets/vr.webp'
import Construction from '../assets/construction.webp'
import Media from '../assets/media.webp'
import { AiFillStar } from 'react-icons/ai'
import Red from '../assets/red.png'
import { HiLocationMarker } from 'react-icons/hi'
import ReeddiRadio from '../assets/reeddi_radio.png'
import ReeddiCapsule from '../assets/reddi_capsule.png'
import ReediHand from '../assets/reeddicapsule.webp'
import Jacob from '../assets/jacob.jpg'
import Darlington from '../assets/darlinton.jpg'
// import Iphone from '../assets/iphone.webp'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
// SwiperCore.use([Pagination]);

import Lagos from '../assets/lagos.webp'
import Abuja from '../assets/abuja.webp'
import Ogun from '../assets/ogun.webp'
import Ibadan from '../assets/ibadan.webp'

import Drone from '../assets/drone.webp'
import Camera from '../assets/camera.webp'
import Capsule from '../assets/capsule.webp'
import Tractor from '../assets/tractor.webp'




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
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
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
                            CategoryImages.map((image) => {
                                return (
                                    <SwiperSlide>
                                        <div className='relative filter hover:sepia hover:scale-105 transition-all ease-linear'>
                                            <div>
                                                <img src={image.name} alt={image.altText} className="rounded-t-2xl" />
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

const HeroSection = () => {
    // SwiperCore.use([Pagination])
    const images = [Drone, Capsule, Camera, Tractor]
    const imagesTitle = ["drone", "capsule", "camera", "tractor"]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
        }, 1000);

        return () => {
        clearInterval(intervalId);
        };
    }, [currentIndex, images.length])

    
    
    
    return (
      <>
            <section className='bg-[#f9f9f9] flex flex-col' >
                <div className='max-w-[1440px] mx-auto'>
                <div className='pt-20 md:pt-10 flex md:mt-0 md:w-[95%] md:mx-auto gap-14 flex-col md:flex-row'>
                    <div className='flex flex-col gap-8 md:w-[90%] w-[95%] m-auto md:flex-1 lg:py-24'>
                        <h1 className='text-4xl md:text-5xl xl:text-6xl font-semibold text-black md:leading-[50px]'>Own a <span className='text-primary'>{imagesTitle[currentIndex]}</span> temporarily today!</h1>
                        <p className='text-[#616564] md:w-[90%]'>TempOwn connects individuals, creatives and project executives to thousands of equipment renting owners.</p>
                        <div className='rounded-full border border-gray-300 md:py-2 py-1 pl-3 pr-1 md:pr-2 flex items-center'>
                            <CiSearch className='text-primary text-2xl' />
                            <input type="text" placeholder='search item by name or category' className='w-full outline-none placeholder:text-xs ml-3 bg-transparent' />
                        <button className='text-white font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-full h-12 md:px-8 px-6 py-0 text-xs'>Search</button>
                        </div>

                        <div className='text-xs flex gap-10 justify-between'>
                            <p className='font-semibold'>
                                Or List an item<span className='text-primary hidden md:inline-block px-4'>|</span><span className=' hidden md:inline-block'> Become an agent </span>
                            </p>
                        <p className='text-primary font-semibold '>🔒 All items are fully insured</p>
                        </div>
                    </div>
                    <div className='md:w-[50%] m-auto mt-10 flex-1 w-[70%] py-10'>
                        <img src={`${images[currentIndex]}`} alt="hero_image w-full h-full" />
                    </div>
                </div>
                    <span className='flex items-center gap-2 bg-white max-w-48 mt-10 rounded-t-2xl rounded justify-center self-center text-[#616564] p-2 text-xs font-semibold'>A product of <img src={Reeddi} alt="Reddi" /> <BsArrowUpRight className='font-semibold' /></span>
                    </div>
            </section>
            
            <section className='mt-14 container mx-auto px-4'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Browse by Category</h2>

                <div className=' mt-14 overflow-hidden'>                   
                   <BrowseSection />
                </div>

                <div className='flex items-center w-full justify-center my-14 px-2'>
                    <p className='text-black md:text-sm  text-[10px] '>Looking for an item or category not listed here? <span className='text-primary font-semibold'>See All</span></p>
                </div>
            </section>

            {/* newly listed */}
            <section className='container px-4 mx-auto '>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Newly Listed</h2>

                <Swiper
                    className="my-swiper-container my-20"
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={20}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
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
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl image overflow-hidden'>
                        <img src={ReeddiRadio} alt="" className='rounded-2xl hover:scale-110 transition-all  ' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N2,000<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>


            </section>

            {/* recommended for you  */}
            <section className='container px-4 mx-auto my-20'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Recommended for you</h2>

                 <Swiper
                    className="my-swiper-container my-20"
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={20}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
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
                    
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-110 transition-all' />
                        </div>
                        <div>
                            <div className='flex justify-between w-full my-2'>
                                <div className='flex items-center gap-1 text-xs'><AiFillStar className='text-primary'/> Newly Listed</div>
                                <div className='flex justify-between gap-1'>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src={Red} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className='text-sm'>Reeddi</div>
                                </div>

                            </div>
                            <h4 className='font-semibold py-3'>Reeddi BigEnergy</h4>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-xs flex items-center'><HiLocationMarker className='text-[#616564]'/> <span>Kosofe, LA</span></div>
                                <span className='text-primary text-sm font-semibold'>N500<span className='font-normal'>/day</span></span>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>


            </section>

            {/* EXPLORE SECTION */}
            <section className='px-4 py-16 bg-[#f3f3f3]'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Explore by city</h2>

                <div className=' mt-14'>

                     
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            <div className='relative'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img src={Lagos} alt="a buzy markl=et place" className="rounded-t-2xl hover:scale-110 transition-all " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#006537] bg-gradient-to-l from-[#266d4d] to-primary rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Lagos</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img src={Abuja} alt="zuma rock in the background" className="rounded-t-2xl  hover:scale-110 transition-all" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#736B1B] bg-gradient-to-r from-[#857D2D] to-[#6F6717] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Abuja</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative'>
                                
                                <div className=' rounded-t-2xl overflow-hidden'>
                                <img src={Ogun} alt="solar panels" className="rounded-t-2xl hover:scale-110 transition-all" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#016A57] bg-gradient-to-r from-[#016A57] to-[#02493C] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ogun</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                            
                            <div className='relative'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img src={Ibadan} alt="solar panels" className="rounded-t-2xl hover:scale-110 transition-all" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#839E00] bg-gradient-to-r from-[#839E00] to-[#637700] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ibadan</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </section>

            {/* Browse section */}
            <section>

                <Swiper
                    className="my-swiper-container my-20"
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    spaceBetween={20}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
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
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                >
                <SwiperSlide>
                    <div className='md:container  px-5 pt-5  w-[90%] mx-auto rounded-2xl mt-12 bg-browse-pattern bg-cover bg-center bg-[#FDF3E3] h-full flex flex-col gap-22 justify-between md:flex-row md:px-10'>
                        <div className='self-center'>
                            <h2 className='text-black font-semibold text-4xl md:text-5xl md:w-[80%]'>Get <span className='text-primary'>24/7</span> power supply</h2>
                            <p className='text-black  py-5 md:text-xl'>Power your equipment, rent Reeddi Capsule today!</p>
                            <button className='text-white px-6 py-3 font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-xl'>Browse All</button>

                        </div>
                        <div className='mt-20 md:w-1/3'>
                            <img src={ReediHand} alt="" className=''/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:container  px-5 pt-5  w-[90%] mx-auto rounded-2xl mt-12 bg-browse-pattern bg-cover bg-center bg-[#FDF3E3] h-full flex flex-col gap-22 justify-between md:flex-row md:px-10'>
                        <div className='self-center'>
                            <h2 className='text-black font-semibold text-4xl md:text-5xl md:w-[80%]'>Get <span className='text-primary'>24/7</span> power supply</h2>
                            <p className='text-black  py-5 md:text-xl'>Power your equipment, rent Reeddi Capsule today!</p>
                            <button className='text-white px-6 py-3 font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-xl'>Browse All</button>

                        </div>
                        <div className='mt-20 md:w-1/3'>
                            <img src={ReediHand} alt="" className=''/>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>

                
               
            </section>

            {/* what we do */}
            <section className='container px-4 mx-auto mt-16 '>
                <h2 className='font-semibold text-3xl mb-8'>What we are doing differently at <span className='text-primary'>tempown</span></h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className=' rounded-2xl  border border-green-500 px-6 py-8 bg-protection-image bg-[#EFFBF9] bg-contain bg-no-repeat bg-right-bottom '>
                            <h3 className='text-black font-semibold text-xl md:w-[50%]'>Providing adequate protection</h3>
                            <a href="/" className='text-primary font-semibold gap-1 flex items-center mt-6 mb-8'>Read More <BsArrowRight /></a>
                        </div>
                        <div className=' rounded-2xl  border border-green-500 px-6 py-8 bg-planet-pattern bg-[#EFFBF9] bg-contain bg-no-repeat bg-right-bottom '>
                            <h3 className='text-black font-semibold text-xl'>Saving the planet</h3>
                            <a href="/" className='text-primary font-semibold gap-1 flex items-center mt-6 mb-8'>Read More <BsArrowRight /></a>
                        </div>
                    <div className=' rounded-2xl  border border-green-500 px-6 py-8 bg-reeddi-cash bg-[#FFF2C4] bg-contain bg-no-repeat bg-right-bottom '>
                        <div className=''>
                            <h3 className='text-black font-semibold text-xl w-7/12 mb-16'>Flexible & affordable rental options</h3>
                        </div>
                        </div>

                        
                        
                    </div>
            </section>


            

            <section className="mt-14 container mx-auto rounded-xl px-6 py-10 lg:px-12 lg:py-12 xl:py-20 bg-cover bg-no-repeat bg-center bg-planet-pattern" >
                <div className="">
                    <p className="text-xs lg:text-sm text-temp-gray mb-2">Thu Apr 27 2023</p>
                    <div className="text-center flex flex-col justify-center pb-32 mt-4 lg:mt-0">
                    <p className="text-base lg:text-lg uppercase">Total Emission saved</p>
                    <p className="pt-3 pb-2 font-semibold text-black text-5xl lg:text-6xl">1004</p>
                    <p className="text-primary font-medium text-xl lg:text-2xl">kgCO<sub>2</sub></p>
                    </div>
                </div>
            </section>

            <section className='container px-4 mx-auto mt-16'>
                <h2 className='font-semibold text-3xl mb-8 md:my-24 md:w-[50%] md:text-5xl'>See how <span className='text-primary'>tempown</span> is making life better</h2>

                <Swiper
                    className="my-swiper-container"
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={50}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
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
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='flex gap-5 bg-[#f9f9f9] p-6 rounded-xl'>
                            <div className='w-1/12 md:w-1/3 md:h-[235px] md:rounded-xl rounded-full'>
                                <img src={Jacob} alt=""  className='rounded-xl w-full '/>
                            </div>

                            <div className='w-11/12 space-y-4  md:w-2/3'>
                                <span className='font-semibold flex items-center gap-2'><AiFillStar className='text-primary' /> 5.0</span>
                                <p className=' text-sm leading-6'>Everyday, innovations emerge, especially online. It's always exciting to see an innovation that really meets a need. We can't wait to use this one as a Relocation and Cleaning Services Group</p>
                                <p className='text-sm font-semibold'>Jacob-Eyaba</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-5 bg-[#f9f9f9] p-6 rounded-xl'>
                            <div className='w-1/12 md:w-1/3 md:rounded-xl rounded-full'>
                                <img src={Darlington} alt=""  className='rounded-xl w-full'/>
                            </div>

                            <div className='w-11/12 space-y-4 md:w-2/3'>
                                <span className='font-semibold flex items-center gap-2'><AiFillStar className='text-primary' /> 5.0</span>
                                <p className=' text-sm leading-6'>Everyday, innovations emerge, especially online. It's always exciting to see an innovation that really meets a need. We can't wait to use this one as a Relocation and Cleaning Services Group</p>
                                <p className='text-sm font-semibold'>Jacob-Eyaba</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-pagination"></div>
                </Swiper>
               
                <style>{`
                    .my-swiper-container .swiper-pagination .swiper-pagination-bullet {
                    background-color: #08a05c;
                    width: 12px;
                    height: 12px;
                    }
                    .swiper-pagination {
                    position: relative;
                    bottom: 1rem;
                    margin-top: 70px;
                    }

                    

                    .swiper-pagination .swiper-pagination-bullet-active {
                    background: var(--primary);
                    }
                    `}</style>
            
            </section>





















            {/* <section className='bg-[#F2F8F7] my-40 rounded-xl md:w-[98%] mx-auto'>
                <div className='max-w-[1440px] mx-auto flex justify-between px-8 py-10 md:py-0 lg:px-14 flex-col md:flex-row '>
                    <div className='md:w-2/3 self-center'>
                        <h2 className='md:text-5xl text-3xl font-semibold md:w-[60%]'>Get updates from <span className='text-primary'>tempown</span></h2>
                        <p className='py-6 text-gray-500 text-sm md:text-base'>Subscribe to our Newsletter to receive updates from us 📩</p>
                        <div className='mt-2 rounded-full border border-gray-300 md:py-2 py-1 pl-3 pr-1 md:pr-2 flex items-center max-w-[550px] bg-white'>
                            <input type="text" placeholder='Enter your email address' className='w-full outline-none placeholder:text-sm ml-3 bg-transparent' />
                            <button className='text-white font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-full h-12 md:px-8 px-6 py-0 text-xs'>Submit</button>
                        </div>
                    </div>
                    <div className='md:w-1/3 md:-mt-28 md:mb-14 w-4/5 self-center mt-12'>
                        <img src={Iphone} alt="two iphones" />

                        <div className='flex items-center my-4 text-sm gap-3 text-center flex-col md:flex-row'>Available soon on <span className='flex gap-1 text-2xl'><BsApple/> <BsAndroid2/></span></div>
                    </div>
                </div>
            </section> */}
        </>
  )
}

export default HeroSection