import Prods from '@/app/components/s-cards/prodcat'
import Image from 'next/image'
import React from 'react'
import Card1 from '../assets/card-1.webp'
import Card2 from '../assets/card-2.webp'
import Card3 from '../assets/card-3.webp'
import Card4 from '../assets/card-4.webp'
import Card5 from '../assets/card-5.webp'
import Card6 from '../assets/card-6.webp'

type Props = {}

const Prodcat = (props: Props) => {
  return (
<div className=' place  mt-36 gap-4 grid grid-cols-2 lg:grid-cols-6  md:grid-cols-3 h-full auto-cols-fr'>
<Prods id='1'>
  <Image src={Card1}  alt='Hair Care' />
  Hair Care
</Prods>
<Prods id='2'>
  <Image src={Card2}  alt='Skin Care' />
  Skin Care
</Prods>
<Prods id='3'>
  <Image src={Card3}  alt='Lip Stick' />
  Lip Stick
</Prods>
<Prods id='4'>
  <Image src={Card4}  alt='Face Skin' />
  Face Skin
</Prods>
<Prods id='5'>
  <Image src={Card5}  alt='Brusher' />
  Brusher
</Prods>
<Prods id='6'>
  <Image src={Card6}  alt='Natural' />
  Natural
</Prods>
</div>
  )
}

export default Prodcat