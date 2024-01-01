import Square from '@/app/components/sqare/square'
import Image from 'next/image'
import React from 'react'
import P1 from '../assets/pic1.webp'
import P2 from '../assets/pic2.webp'
import P3 from '../assets/pic3.webp'

type Props = {}

const Mod4 = (props: Props) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20 gap-x-4 '>
        <Square>
            <Image src={ P1 } className='rounded-lg' alt='pic1'/>
        </Square>
        <Square>
            <Image src={ P2 } className='rounded-lg' alt='pic2'/>
        </Square>
        <Square>
            <Image src={ P3 } className='rounded-lg' alt='pic3'/>
        </Square>

    </div>
  )
}

export default Mod4