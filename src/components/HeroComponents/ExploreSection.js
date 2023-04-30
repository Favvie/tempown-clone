import React from 'react'

import Lagos from '../../assets/lagos.webp'
import Abuja from '../../assets/abuja.webp'
import Ogun from '../../assets/ogun.webp'
import Ibadan from '../../assets/ibadan.webp'


const ExploreSection = () => {
  return (
      <section className='px-4 py-16 bg-[#f3f3f3] '>
          <div className='max-w-[1440px] mx-auto'>
                <h2 className='font-semibold text-black text-xl md:text-4xl'>Explore by city</h2>

                <div className=' mt-14'>

                     
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            <div className='relative cursor-pointer'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img loading='lazy' src={Lagos} alt="a buzy markl=et place" className="rounded-t-2xl hover:scale-110 transition-all w-full " />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#006537] bg-gradient-to-l from-[#266d4d] to-primary rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Lagos</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative cursor-pointer'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img loading='lazy' src={Abuja} alt="zuma rock in the background" className="rounded-t-2xl  hover:scale-110 transition-all  w-full" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#736B1B] bg-gradient-to-r from-[#857D2D] to-[#6F6717] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Abuja</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>

                            <div className='relative cursor-pointer'>
                                
                                <div className=' rounded-t-2xl overflow-hidden'>
                                <img loading='lazy' src={Ogun} alt="solar panels" className="rounded-t-2xl hover:scale-110 transition-all  w-full" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#016A57] bg-gradient-to-r from-[#016A57] to-[#02493C] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ogun</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                            
                            <div className='relative cursor-pointer'>
                                
                                <div className='rounded-t-2xl overflow-hidden'>
                                <img loading='lazy' src={Ibadan} alt="solar panels" className="rounded-t-2xl hover:scale-110 transition-all  w-full" />
                                </div>
                                <div className='font-semibold py-8 px-4  bg-[#839E00] bg-gradient-to-r from-[#839E00] to-[#637700] rounded-b-2xl text-white'>
                                    <h4 className='text-xl'>Ibadan</h4>
                                    <p className='text-sm font-normal py-2'>View items available</p>
                                </div>
                            </div>
                        </div>
                   
              </div>
            </div>
            </section>
  )
}

export default ExploreSection