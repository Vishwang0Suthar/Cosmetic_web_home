import React from 'react'
import Mod4 from '../mod4/mod-4'
import Blogdesc from '@/app/components/blog-desc/blogdesc'

type Props = {}

const Mod6 = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-6xl mt-40 '>Blog Posts</h1>
        <p className='text-center mt-10 w-96 '>Following are some of our top sales, products that our customers keep buying on repeat</p>
        
        <Mod4/>
        <Blogdesc >Facial Scrub is natural treatment for face.</Blogdesc>
        <Blogdesc > Lorem ipsum dolor sit amet consectetur. </Blogdesc>
        <Blogdesc >Benefit of Hot Ston Spa for your health & life.</Blogdesc>
    </div>
  )
}

export default Mod6