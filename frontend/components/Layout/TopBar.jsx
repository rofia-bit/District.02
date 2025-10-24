import React from 'react'

import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container mx-auto'>
            <div>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className="h-5 w-5"/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className="h-5 w-5"/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <FaTwitter className="h-5 w-5"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar