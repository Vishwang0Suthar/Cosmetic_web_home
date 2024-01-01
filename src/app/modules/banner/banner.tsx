import React from 'react'
import Header from '../header/header'
import Image from 'next/image'
import Best from '../assets/text-light-1.png'
import Slider0 from '../assets/slider0.webp'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../assets/Demo_Fonts/singolarelayers-two.otf' })
type Props = {}

const banner = (props: Props) => {
  return (<div className="flex  relative h-[80vh]  md:h-[100vh] lg:h-[140vh] "><div  className=' h-full w-full absolute flex'>
    <div className=" flex-1 relative bg-[#fbfbfa]  top-0 left-0">
    </div>
  <div className="  flex-1 bg-[rgb(217,240,224)]  relative right-0 top-0">
  <p className={`absolute rotate-90 lg:left-[-30%]  left-[-90%] text-2xl lg:top-[0%] lg:text-7xl  text-white h-full select-none w-full ${myFont.className}`}>
          SUMMER COLLECTION
        </p>
  </div>
  </div>
  <div className=' relative gap-36  flex lg:flex-row-reverse md:flex-row-reverse  flex-col-reverse'>
    <div className='flex-col flex place-self-center'>
        <Image className='opacity-100  '  src={Slider0} alt='slider0' width={770} height={770}/>
        
        </div>
  <div className=' mt-[-20%] place-self-center mr-[-15%] justify-self-center  flex-col flex '>
    <Image src={Best} alt='Best' className=' ' width={427} height={240} />
    <div className=' lg:absolute flex flex-col top-[40%] gap-5  '>
            <strong className='text-[#231843] text-2xl  md:text-2xl lg:text-6xl  ' >CLEAN FRESH</strong>
            <p className=' text-lg w-[70%] ' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quisquam! </p>
    <a className="btn btn-border-dark" href="product.html">BUY NOW</a>
    </div>

  </div>
  </div>
  
</div>

)
}

export default banner