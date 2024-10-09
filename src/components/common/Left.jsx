import React from 'react'
import Bton from './Btn'
import MovingTextOnScroll from './Wordmove'

export default function Left() {
  return (
    <>
    <div className='absolute ml-32 mt-32'>
    <MovingTextOnScroll/>


     <p className='text-white font-light text-4xl tracking-widest w-[22%] ml-8'>ONLY THE FINEST FOOD & GREAT SERVICE</p>
     <p className='text-white w-1/4 ml-8 mt-4 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <Bton/>
     </div>
    </>
  )
}
