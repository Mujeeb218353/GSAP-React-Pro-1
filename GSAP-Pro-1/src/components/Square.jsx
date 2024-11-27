import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Square = () => {
    const { contextSafe } = useGSAP()
    const gsapRef = useRef()
    const rotateSquare = contextSafe(() => {
        const rotate = gsap.utils.random(-900, 900, 90)
        gsap.to(gsapRef.current, {
          rotate: rotate,
          duration: 2,
      })
    })
    const resetSquare = contextSafe(() => {
      gsap.to(gsapRef.current, {
        rotate: 0,
        duration: 2,
    })
  })
  return (
    <div className='w-full h-full min-h-screen bg-[#1e1e1e] flex flex-col justify-center items-center gap-20'>
      <button onClick={rotateSquare} className='rounded-full border-2 border-[crimson] p-4 text-[crimson] text-lg font-semibold w-60 hover:bg-[crimson] hover:text-white active:scale-95 transition-transform duration-200 ease-in-out'>Rotate</button>
      <div ref={gsapRef} className='w-80 h-80 bg-[crimson] rounded-3xl flex justify-center items-center text-xl font-bold' id='box'>Box</div>
      <button onClick={resetSquare} className='rounded-full border-2 border-[crimson] p-4 text-[crimson] text-lg font-semibold w-60 hover:bg-[crimson] hover:text-white active:scale-95 transition-transform duration-200 ease-in-out'>Reset</button>
    </div>
  )
}

export default Square;