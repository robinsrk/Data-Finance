import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaDribbbleSquare
} from 'react-icons/fa';

import { FooterData } from './FooterData';

const Footer = () => {
  return (
    <>
        <div className='py-16 px-8 text-white md:flex md:gap-4'>
            <div >
                <h1 className='text-3xl font-semibold text-[#00df9a]'>S.R.</h1>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus eligendi distinctio, alias quidem maiores.</p>
                <div className='flex gap-8'>
                    <a href="#" className='hover:text-[#00df9a]'> <FaFacebookF size={25} /> </a>
                    <a href="#" className='hover:text-[#00df9a]'> <FaInstagram size={25} /> </a>
                    <a href="#" className='hover:text-[#00df9a]'> <FaTwitter size={25} /> </a>
                    <a href="#" className='hover:text-[#00df9a]'> <FaGithub size={25} /> </a>
                    <a href="#" className='hover:text-[#00df9a]'> <FaDribbbleSquare size={25} /> </a>
                </div>
            </div>

            <div className='grid grid-cols-3 mt-8 md:mt-0 md:flex md:justify-between lg:justify-around md:w-full '>
                {
                    FooterData.map((items, index) =>{
                        const {heading, link} = items;
                        console.log(link)
                        return(
                            <div key={index}>
                                <h3 className='text-lg font-semibold mb-2 md:mb-5'>{heading}</h3>
                                {
                                    link.map((url, index)=> {
                                        console.log(url)
                                        return(
                                            <ul className='flex flex-col' key={index}>
                                                <li className='hover:text-[#00df9a] text-small mb-1'>
                                                    <a href=""> {url} </a>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Footer