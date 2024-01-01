import React from 'react'
import Image from 'next/image';
import logo from '../assets/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Socials from '../socials/socials';
import { faHeart , faExpand } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='  grid px-24  grid-cols-1 gap-6 p-20 grid-rows-1 sm:grid-cols-[1.2fr_1.5fr_0.8fr]  self-center auto-cols-fr ' >
        <div className='flex  flex-col gap-6' >
        <a href='#'> <Image
      src={logo}
      alt="logo"
        width={70}
        height={50}
      /> </a>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corporis! </p>
        </div>
        <div className='flex flex-col gap-6' >
        <strong>Information</strong>
            <div className='grid grid-cols-3 gap-8 grid-rows-3' >
                <a href="">Blog</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
                <a href="">Piracy</a>
                <a href="">Login</a>
                <a href="">Shop</a>
                <a href="">My Account</a>
                <a href="">FAQ`s</a>


            </div>
        </div>
        <div className=' flex flex-col gap-6 '>

          <strong>Social Links</strong>

          <Socials >
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faPinterest} />

          </Socials>

        </div>    
    </div>
  )
}

export default Footer