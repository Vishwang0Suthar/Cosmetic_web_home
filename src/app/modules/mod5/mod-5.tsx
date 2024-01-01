import Product from '@/app/components/l-cards/mod3'
import Image from 'next/image'
import React from 'react'
import P1 from '../assets/product/1.webp'
import P2 from '../assets/product/2.webp'
import P3 from '../assets/product/3.webp'

import Userops from '@/app/components/user-ops/userops'


type Props = {}

const Grid2= (props: Props) => {
  return (
    <>
        <div className=' relative mt-20 grid gap-y-8 gap-x-4 lg:grid-cols-3  lg:grids-rows-2 md:grid-cols-2 grid-cols-2'>
        <Product > 
          <Image className='rounded-lg' src={P1} alt='prod1' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P2} alt='prod2' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P3} alt='prod3' /> 
           
          </Product>

        </div>
    </>
    )
}

export default Grid2