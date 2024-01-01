import React, { Children, ReactNode } from 'react'
import Userops from '../user-ops/userops';
import Tag from '../tag/tag';

type Props = {
    children:ReactNode;
}

function Product({children}: Props) {
  const arrayOfChildren = React.Children.toArray(children)
    return (<div className='relative w-fit'>
    <div className='   z-0 relative hover:scale-[100%]  hover:shadow-lg flex  duration-200  ease-in-out rounded-xl w-fit items-center' >
      <a href="" className='  transition-transform ' >
      {arrayOfChildren[0]}
      </a>
      <Userops/>
      
      </div>
      
      <Tag id='0' ><p className='hover:cursor-pointer' >New</p></Tag>
    </div>
  )
}

export default Product