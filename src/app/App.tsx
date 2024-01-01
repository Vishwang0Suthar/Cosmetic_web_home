import React from 'react'
import Banner from './modules/banner/banner'
import Prodcat from './modules/mod-2/prod-cat'
import Grid1 from './modules/mod-3/mod3'
import Mod4 from './modules/mod4/mod-4'
import Demo from './demo'
import Grid2 from './modules/mod5/mod-5'
import Mod6 from './modules/mod-6/mod6'

type Props = {}

const App = (props: Props) => {
  return (
    <>
     <Banner/>
     <div className='flex flex-col mx-5 lg:mx-36'>
     <Prodcat/>
     <Grid1/>
     <Mod4/>
     <Grid2/>
     <Mod6/>
     </div>
    </>
  )
}

export default App