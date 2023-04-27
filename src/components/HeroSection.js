import React, { useState, useEffect} from 'react'
// import HeroImage from '../assets/enterprise.39f9874d.webp'
import { CiSearch } from 'react-icons/ci'
import Reeddi from '../assets/reeddi.svg'
import { BsArrowUpRight } from 'react-icons/bs'
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
import Protection from '../assets/protection.webp'
// import SavingPlant from '../assets/savingplant.svg'
// import Affordable from '../assets/affordable.webp'


import Lagos from '../assets/lagos.webp'
import Abuja from '../assets/abuja.webp'
import Ogun from '../assets/ogun.webp'
import Ibadan from '../assets/ibadan.webp'

import Drone from '../assets/drone.webp'
import Camera from '../assets/camera.webp'
import Capsule from '../assets/capsule.webp'
import Tractor from '../assets/tractor.webp'


import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


const BrowseSection = () => {
    const CategoryImages = [
        { "name": Energy, "altText": 'Energy', "color": "f1f3f3" },
        { "name": Media, 'altText': 'Media', "color": "edffff" },
        { "name": Agric, 'altText': 'Agriculture', "color": "F3FCED"},
        { 'name': Construction, 'altText': 'Construction', "color": "fff3f0" },
        { 'name': VR, "altText": 'General', "color": "F1F7FF" }]

    return (
        <OwlCarousel
                        items={5}  
                        className="owl-theme owl-carousel" 
                        loop  
                        // nav  
                        dots={false}
                        margin={30}
                        responsive={{
                        0: {
                        items: 2
                        },
                        600: {
                        items: 3
                            },
                            900: {
                            items: 5
                        }
                    }}
                    >  
                        {/* <div className='relative'>
                            <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                            </div>
                            <div>
                            <img src={Energy} alt="solar panels" className="rounded-t-2xl " />
                            </div>
                            <div className='font-semibold p-4  bg-[#f3f3f3] rounded-b-2xl'>Energy</div>
                        </div>
                        <div className='relative'>
                            <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                            </div>
                            <div>
                            <img src={Energy} alt="solar panels" className="rounded-t-2xl " />
                            </div>
                            <div className='font-semibold p-4  bg-[#f3f3f3] rounded-b-2xl'>Energy</div>
                        </div>
                        <div className='relative'>
                            <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                            </div>
                            <div>
                            <img src={Energy} alt="solar panels" className="rounded-t-2xl " />
                            </div>
                            <div className='font-semibold p-4  bg-[#f3f3f3] rounded-b-2xl'>Energy</div>
                        </div>
                        <div className='relative'>
                            <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                            </div>
                            <div>
                            <img src={Energy} alt="solar panels" className="rounded-t-2xl " />
                            </div>
                            <div className='font-semibold p-4  bg-[#f3f3f3] rounded-b-2xl'>Energy</div>
                        </div>
                        <div className='relative'>
                            <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                            </div>
                            <div>
                            <img src={Energy} alt="solar panels" className="rounded-t-2xl " />
                            </div>
                            <div className='font-semibold p-4  bg-[#f3f3f3] rounded-b-2xl'>Energy</div>
                        </div> */}
                        
                        {
                            CategoryImages.map((image) => {
                                return (
                                <div className='relative'>
                                    <div className="absolute inset-0 opacity-0 bg-black hover:opacity-50 transition-opacity rounded-2xl w-full h-full">
                                    </div>
                                    <div>
                                    <img src={image.name} alt={image.altText} className="rounded-t-2xl" />
                                    </div>
                                        <div className={`font-semibold p-4 bg-[#${image.color}] rounded-b-2xl`}>{image.altText}</div>
                                </div>)
                            })
                        }
                    </OwlCarousel> 
    )
}

const HeroSection = () => {
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
                <span className='flex items-center gap-2 bg-white max-w-48 mt-10 rounded-t-2xl rounded justify-center self-center text-[#616564] p-2 text-xs font-semibold'>A product of <img src={Reeddi} alt="Reddi" /> <BsArrowUpRight className='font-semibold'/></span>
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
            {/* <section className='container px-4 mx-auto'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Newly Listed</h2>

                <OwlCarousel
                    items={6}
                    loop
                    className="owl-theme mt-14"
                    dots={false}
                    margin={30}
                    stagePadding={20}
                    responsive={{
                        0: {
                            items: 1.3
                        },
                        600: {
                            items: 3.1
                        },
                        900: {
                            items: 3.9
                        }
                    }}
                >
                    <div>
                        <div className='rounded-2xl image overflow-hidden'>
                        <img src={ReeddiRadio} alt="" className='rounded-2xl hover:scale-105  ' />
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
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-105' />
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
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-105' />
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
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-105' />
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
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-105' />
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
                    <div>
                        <div className='rounded-2xl overflow-hidden'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl hover:scale-105' />
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
                </OwlCarousel>


            </section> */}

            {/* recommended for you  */}
             {/* <section className='container px-4 mx-auto my-20'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Recommended for you</h2>

                <OwlCarousel
                    items={6}
                    loop={true}
                    className="owl-theme mt-14"
                    dots={false}
                    margin={30}
                    responsive={{
                        0: {
                            items: 1.3
                        },
                        600: {
                            items: 3.1
                        },
                        900: {
                            items: 3.9
                        }
                    }}
                >
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiRadio} alt="" className='rounded-2xl' />
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
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl' />
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
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl' />
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
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl' />
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
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl' />
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
                    <div>
                        <div className='rounded-full'>
                        <img src={ReeddiCapsule} alt="" className='rounded-2xl' />
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
                </OwlCarousel>


            </section> */}

            {/* EXPLORE SECTION */}
            {/* <section className='px-4 py-16 bg-[#f3f3f3]'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Explore by city</h2>

                <div className=' mt-14'>

                     
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            <div className='relative'>
                                
                                <div>
                                <img src={Lagos} alt="solar panels" className="rounded-t-2xl " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#006537] bg-gradient-to-l from-[#266d4d] to-primary rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Lagos</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative'>
                                
                                <div>
                                <img src={Abuja} alt="solar panels" className="rounded-t-2xl " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#736B1B] bg-gradient-to-r from-[#857D2D] to-[#6F6717] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Abuja</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative'>
                                
                                <div>
                                <img src={Ogun} alt="solar panels" className="rounded-t-2xl " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#016A57] bg-gradient-to-r from-[#016A57] to-[#02493C] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ogun</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                            
                            <div className='relative'>
                                
                                <div>
                                <img src={Ibadan} alt="solar panels" className="rounded-t-2xl " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#839E00] bg-gradient-to-r from-[#839E00] to-[#637700] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ibadan</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </section> */}

            {/* Browse section */}
            {/* <section>

                <OwlCarousel
                    items={2}
                    loop
                    className="owl-theme mt-14"
                    dots={true}
                    
                    responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        900: {
                            items: 1
                        }
                    }}
                >
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
                   
                </OwlCarousel>

                
               
            </section> */}

            {/* what we do */}
            {/* <section className='container px-4 mx-auto mt-16 '>
                <h2 className='font-semibold text-3xl mb-8'>What we are doing differently at tempown</h2>

                 <OwlCarousel
                        items={3}  
                        className="owl-theme" 
                        // loop  
                        // nav  
                        // dots={false}
                        margin={30}
                        responsive={{
                        0: {
                        items: 1
                        },
                        600: {
                        items: 2
                            },
                            900: {
                            items: 3
                        }
                    }}
                    >  
                    <div className='relative rounded-2xl w-full flex border border-green-500 p-5 bg-[#EFFBF9]'>
                        <div>
                            <h3 className='text-black font-semibold'>Providing adequate protection</h3>
                            <a href="/">Read More</a>
                        </div>
                            <div className='w-2/3 rounded-b-2xl'>
                            <img src={Protection} alt="solar panels" className="w-full" />
                            </div>
                        </div>

                        
                        
                        
                    </OwlCarousel> 
            </section> */}
        </>
  )
}

export default HeroSection