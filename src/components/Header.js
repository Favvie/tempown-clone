import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
      <header className='flex w-full justify-between px-6 py-3 items-center'>
          <img src={Logo} alt="tempown_logo" className='h-6 w-auto md:h-8 lg:h-9' />

          <nav className='hidden md:flex gap-10'>
              <a href='/'>Enterprise <span className='bg-[#c4ffe4] text-primary rounded-full px-3 py-2'>Coming soon</span></a>
              <a href='/'>About</a>
              <a href='/'>List an item</a>
          </nav>

          <div className='hidden md:flex gap-6 items-center'>
              <a href='/' className='font-semibold'>Sign In</a>
              <a href='/' className='text-white px-6 py-3 font-semibold bg-primary bg-gradient-to-r from-[#266d4d] to-primary rounded-xl'>Get Started</a>
          </div>
          <div className='md:hidden' >
            {isOpen ? (
                <IoCloseOutline className="text-primary text-3xl" onClick={()=> setIsOpen(!isOpen)} />
            ) : (
                <RxHamburgerMenu className="text-primary text-3xl" onClick={()=> setIsOpen(!isOpen)} />
            )}
          </div>

          {/* Mobile menu */}
			<div
				className={
					!isOpen
						? "hidden"
						: "absolute top-24 w-full bg-white left-0 px-6 h-[40%]"
				}
			>
                <nav className='flex flex-col gap-6 w-[100%]'>
                <a href='/'>Enterprise <span className='bg-[#c4ffe4] text-primary rounded-full px-3 py-2'>Coming soon</span></a>
                <a href='/'>About</a>
                <a href='/'>List an item</a>
                <a href='/' className='text-white  w-[100%] font-semibold bg-primary text-center rounded-xl px-4 py-2 mt-6'>Get Started</a>
                <a href='/' className='text-[#6b7280] text-sm self-center'>Existing member? <span className='font-semibold  text-primary'>Sign In</span></a>
                </nav>
               
			</div>
    </header>
  )
}

export default Header