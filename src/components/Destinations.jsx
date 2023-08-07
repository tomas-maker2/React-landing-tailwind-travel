import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1>All Inclusive Resorts</h1>
        <p>On the Carribean Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full object-cover h-full col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="" />
            <img className='w-full object-cover h-full' src={BoraBora2} alt="" />
            <img className='w-full object-cover h-full' src={Maldives} alt="" />
            <img className='w-full object-cover h-full' src={Maldives2} alt="" />
            <img className='w-full object-cover h-full' src={KeyWest} alt="" />
        </div>
    </div>
  )
}

export default Destinations