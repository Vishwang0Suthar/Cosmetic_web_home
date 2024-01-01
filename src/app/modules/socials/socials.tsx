import React from 'react'

type Props = {
    children: React.ReactNode;

}

const Socials = ({children}: Props) => {
    const childrenArray = React.Children.toArray(children);

  return (
 <div className='flex  gap-10'>
    {childrenArray[0]}
    {childrenArray[1]}
    {childrenArray[2]}
 </div>
    )
}

export default Socials