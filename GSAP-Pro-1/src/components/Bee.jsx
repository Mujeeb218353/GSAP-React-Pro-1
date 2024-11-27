import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const Bee = () => {
    const gsapRef = useRef()
    const [moveX, setMoveX] = useState()
    const [moveY, setMoveY] = useState()
    const moveBee = (e) => {
        const moveX = gsap.utils.random(-500, 500, 50)
        const moveY = gsap.utils.random(-50, 50, 10)
        setMoveX(moveX)
        setMoveY(moveY)
    }
    useGSAP(()=>{
        gsap.to(gsapRef.current, {
            onStart: () => {
                gsap.to(gsapRef.current, {
                    transform: moveX < 0 ? 'scaleX(-1)' : 'scaleX(1)',
                    duration: 0
                })
            },
            x: moveX,
            y: moveY,
            duration: 1,
        })
    }, [moveX, moveY])
  return (
    <div className='w-full h-full min-h-screen bg-[#1e1e1e] flex flex-col justify-between items-center py-10 overflow-x-hidden'>
      <button onClick={moveBee} className='rounded-full border-2 border-[crimson] p-4 text-[crimson] text-lg font-semibold w-60 hover:bg-[crimson] hover:text-white active:scale-95 transition-transform duration-200 ease-in-out'>Move</button>
      <img src="https://www.transparentpng.com/thumb/bee/y1y2oA-bee-png-image-free-bee-picture-png-download.png" alt="bee" className='w-40' ref={gsapRef}/>
      <button onClick={()=>{
        setMoveX(0)
        setMoveY(0)
        }} className='rounded-full border-2 border-[crimson] p-4 text-[crimson] text-lg font-semibold w-60 hover:bg-[crimson] hover:text-white active:scale-95 transition-transform duration-200 ease-in-out'>Reset</button>
    </div>
  )
}

export default Bee