import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Tag from '../tag/tag'
type Props = {
  children: ReactNode,
  id: string
}

const Prods = ({children,id,...prods}: Props) => {
  const arrayOfChildren = React.Children.toArray(children)
  return (
    <div className={clsx('flex lg:pt-10 transition-all relative duration-200 ease-in-out p-1 hover:scale-[1.001] hover:shadow-lg flex-col justify-center sm:scale-90 sm:py-4 py-8 gap-12 rounded-xl items-center ',{
      'bg-[#dcffd2]':id==='1',
      'bg-[#f5e8d3]':id==='2',
      'bg-[#dee5ff]':id==='3',
      'bg-[#feeacd]':id==='4',
      'bg-[#ffdae0]':id==='5',
      'bg-[#fef3db]':id==='6',


    })}>
      {arrayOfChildren[0]}
      <p className='pt-5 border-t-[1px] border-red-500 mb-2 '> {arrayOfChildren[1]}</p>
      {id==='1'&& <Tag id='1'>New</Tag> }
      {id==='4'&& <Tag id='2' >Sale</Tag> }
    </div>
  )
}

export default Prods