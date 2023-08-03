import React from 'react'
import Screen from './Screen'
import { Route, Routes } from 'react-router-dom'
import WorkExp from './WorkExp'


function Child() {
  return (
   <>

 


       <div className="container">
      <div className="iphone-frame">
        <div className="screen">
<Routes>
              
      {/* <Route path="/" element={ <Screen/>  } /> */}
      <Route path="/" element={ <WorkExp/>  } />

    </Routes>
        </div>
      </div>
    </div>

   </>
  )
}

export default Child