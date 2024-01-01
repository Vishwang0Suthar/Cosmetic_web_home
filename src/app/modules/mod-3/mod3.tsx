import Product from '@/app/components/l-cards/mod3'
import Image from 'next/image'
import React from 'react'
import P1 from '../assets/product/1.webp'
import P2 from '../assets/product/2.webp'
import P3 from '../assets/product/3.webp'
import P4 from '../assets/product/4.webp'
import P5 from '../assets/product/5.webp'
import P6 from '../assets/product/6.webp'
import Userops from '@/app/components/user-ops/userops'


type Props = {}

const Grid1 = (props: Props) => {
  return (
    <>
        <h1 className='text-center text-6xl mt-40 '>Top Sales</h1>
        <p className='text-center mt-10  '>Following are some of our top sales, products that our customers keep buying on repeat</p>
        <div className=' relative mt-12 grid gap-y-8 gap-x-4 lg:grid-cols-3  lg:grids-rows-2 md:grid-cols-2 grid-cols-2'>
        <Product > 
          <Image className='rounded-lg' src={P1} alt='prod1' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P2} alt='prod2' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P3} alt='prod3' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P4} alt='prod4' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P5} alt='prod5' /> 
           
          </Product>
        <Product > 
          <Image className='rounded-lg' src={P6} alt='prod6' /> 
           
          </Product>

        </div>
    </>
    )
}

export default Grid1