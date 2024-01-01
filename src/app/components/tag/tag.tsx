import clsx from 'clsx';
import React, { Children, ReactNode } from 'react'

type Props = {
    children:ReactNode;
    id:string;
}

function Tag({id,children}: Props) {
  return (
    <div className={clsx('absolute z-9 top-5 right-5  bg-[#ff6464]  px-6 text-white rounded-3xl p-2',{
        ' bg-[#ff6464] rotate-[-90deg] right-1 mt-[-14%] ':id==='1',
        'rotate-[-90deg] bg-[#835bf4] mt-[-14%] right-1 ':id==='2',
    })}>
      {children}
      </div>
  )
}

export default Tag