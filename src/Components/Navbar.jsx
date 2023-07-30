import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

import { NavData } from "./NavData.jsx"

const Navbar = () => {
  const [ click, setClick] = useState(false)
  const handleNav = () => {
    setClick(!click)
  }
  return (
    <>
        <header className='w-full h-20 shadow-md sticky top-0 px-10 bg-[#fafafa] flex items-center md:flex-row md:justify-between z-[9999]'>
        <div className='cursor-pointer text-2xl'>
            <h1 className='font-bold'>S.R.</h1>
        </div>
        <div className='md:hidden absolute right-8 cursor-pointer' onClick={handleNav}>
            {
                click ? <FaTimes size={20} /> : <FaBars size={20} />
            }
        </div>
        <nav>
            <ul className={`md:z-auto md:static md:flex md:gap-12 bg-white md:bg-inherit pb-6 md:pb-0 absolute w-full md:duration-0 top-16 right-0 pl-10 z-[-1] transition-all duration-500 ease-in ${click ? 'top-16' : 'right-[-100vw]'}`}>
                {
                    NavData.map((data, index) => {
                        return(
                            <li key={index} className='my-7 md:my-0 font-semibold'>
                                <Link to={data.url} className='text-lg md:text-xl'> {data.text} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar