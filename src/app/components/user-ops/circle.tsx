import clsx from 'clsx';
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode;
    id:string;
}

function Circle({children,id}: Props) {
  return (
    <div  className={clsx(' w-12 p-4  border-2 border-[#e7404d]  rounded-full bg-white aspect-square z-10   ',{

      
      'hover:bg-[#e7404d] transition-all ':id==='1' || id==='2',
      'hover:bg-slate-500 transition-all ':id==='3',
    })} >
        {children}
    </div>
  )
}

export default Circle