import React from 'react'
import { FaRegEnvelope, FaRegSquarePlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='w-full px-3 py-2 flex border-b-[1px] border-zinc-600 items-center justify-between'>
        <div className='w-1/3'>
            <img src="/images/TextLogo.png" alt="ProAthlix" className='object-cover w-full' />
        </div>
        <div className="flex gap-4">
            <FaRegSquarePlus className='text-2xl cursor-pointer' />
            <FaRegEnvelope className='text-2xl cursor-pointer' />
        </div>
    </div>
  )
}

export default Header