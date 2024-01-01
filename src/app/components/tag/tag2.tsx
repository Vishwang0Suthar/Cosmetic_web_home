import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode;
}

function Tag2({children}: Props) {
  return (
<>
{children}
</>        
  )
}

export default Tag2