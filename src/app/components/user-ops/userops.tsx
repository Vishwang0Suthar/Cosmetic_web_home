import React, { ReactNode } from 'react'
import Circle from './circle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart , faUpRightAndDownLeftFromCenter,faExpand } from '@fortawesome/free-solid-svg-icons'
type Props = {

}

function Userops({}: Props) {
  return (
    <div className=' lg:max-h-[5vh] max-h-[3vh] absolute lg:bottom-5 bottom-10 gap-2 md:left-25px lg:left-[40px] left-[20px] justify-self-center  self-center max-w-[40vh] w-[80%] items-center justify-center grid grid-cols-[0.1fr_1fr_0.1fr] grid-rows-[1fr]  z-10 '>
        <Circle id='1'>
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />


        </Circle>
        <p id='3' className='text-center bg-white hover:bg-slate-200 transition-all h-full pt-3 rounded-3xl border-2 border-[#e7404d] ' >ADD TO CART</p>
        <Circle id='2'>
        <FontAwesomeIcon icon={faHeart} style={{ stroke: 'blue' }} />
                </Circle>
    </div>
  )
}

export default Userops