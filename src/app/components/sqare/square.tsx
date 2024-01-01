import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Square = ({children}: Props) => {
  return (
    <div className=' ease-in-out duration-300 flex space-x-40  aspect-square  '>
        {children}
         
    </div>
  )
}

export default Square