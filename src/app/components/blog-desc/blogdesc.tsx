import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const Blogdesc = ({children,...props}: Props) => {
  return (
    <div className=''>
            <p>Beauty</p>
        <strong>{children}</strong>
        <div className='flex '>
        <p>BY:TOMAS DE  MOMEN</p>
        <p>FEBRUARY 13, 2022</p>
        </div>
    </div>
  )
}

export default Blogdesc