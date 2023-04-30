import React from 'react'
import Logo from '../assets/logo.svg'
import Plant from '../assets/plant.svg'
import { AiOutlineInstagram, AiFillFacebook, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
    return (
      
      <footer className='bg-[#F9F9F9]  mt-10 w-full px-10 py-8 container mx-auto text-sm font-medium'>
            <div className='flex flex-col md:flex-row justify-between  px-4'>
                <div>
                    <img src={Logo} alt="tempown_logo" />  
                    <p className='text-[#616564] md:leading-6 text-sm mt-4 md:w-[80%] w-full'>TempOwn is a product of Reeddi. Reeddi is a climate-tech company that seeks to bridge the accessibility gap through sustainable and limitless innovations.</p>
                </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-6 md:gap-0'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-primary font-semibold mt-10 md:mt-0'>The Company</h3>
                    <a href='/' className='hover:text-green'>About</a>
                    <a href='/' className='hover:text-green'>Become A Lender</a>
                    <a href='/'>Enterprise <span className='bg-[#c4ffe4] text-primary rounded-full px-3 py-2 text-xs'>Coming soon</span></a>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-primary font-semibold'>Learn</h3>
                    <a href="/" className='hover:text-green'>Blog</a>
                    <a href="/" className='hover:text-green'>FAQs</a>
                    <a href="/" className='hover:text-green'>Tempown protect</a>
                    <a href="/" className='hover:text-green flex'>Emission Saving <img src={Plant} alt="plant" /></a>
                </div>
                <div className='flex flex-col gap-7'>
                    <h3 className='text-primary font-semibold'>Contact</h3>
                    <p>
                        🇨🇦 Toronto, Canada.
                        100 College St Suite 150
                        Toronto, ON M5G 1L5 Canada.
                        Tel: +16474554327
                    </p>
                    <p>
                        🇳🇬 Lagos, Nigeria.
                        32b Okunola Aina Street,
                        Maryland, Lagos
                        Tel: +2348122888638
                    </p>
                        
                    <a href='/' className='flex  items-center gap-3 text-white px-4 py-3 font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-xl w-[58%] text-xs'>CONTACT US <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5906 1.01074H2.39476C1.32874 1.01074 0.461426 1.87789 0.461426 2.94408V9.18371C0.461426 10.2475 1.32497 11.1133 2.3879 11.117V13.9485L6.45704 11.117H12.5906C13.6566 11.117 14.5239 10.2497 14.5239 9.18371V2.94408C14.5239 1.87789 13.6566 1.01074 12.5906 1.01074ZM13.6999 9.18371C13.6999 9.79534 13.2023 10.2931 12.5906 10.2931H6.19852L3.21187 12.3714V10.2931H2.39476C1.78305 10.2931 1.2854 9.79534 1.2854 9.18371V2.94408C1.2854 2.33228 1.78305 1.83472 2.39476 1.83472H12.5906C13.2023 1.83472 13.6999 2.33228 13.6999 2.94408V9.18371Z" fill="#4CE797"></path><path d="M4.22522 3.92212H10.7602V4.74609H4.22522V3.92212Z" fill="#4CE797"></path><path d="M4.22522 5.67993H10.7602V6.50391H4.22522V5.67993Z" fill="#4CE797"></path><path d="M4.22522 7.43774H10.7602V8.26172H4.22522V7.43774Z" fill="#4CE797"></path></svg></a>
                        

                </div>
            </div>
            </div>

            <div className='flex justify-between mt-16 mb-5 border-y-4 p-8 text-sm flex-col md:flex-row gap-4'>
                <p>©2023 TempOwn.<br className='md:hidden'/>  All Rights Reserved</p>

                <div className='flex gap-2'>
                    <p>Terms of Service</p>
                    <p>Policies</p>
                </div>

                <div className='text-primary flex text-xl gap-3'>
                    <AiFillFacebook />
                    <AiFillYoutube />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />

                </div>
            </div>
    </footer>
  )
}

export default Footer