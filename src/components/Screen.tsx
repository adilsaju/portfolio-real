import React from 'react'
import { Link } from "react-router-dom";

function Screen() {
  return (
    <>
              <div className="text">
            <h1 className='script-font'>Adil Saju</h1>
            <p>welcome to my unique resume😄</p>
            <p>Navigate to see my experience</p>

            
            <Link to={`/workexp`}>
                      <button className='btn'>Continue 👉🏻</button>
              </Link>

          </div>
    </>
    
  )
}

export default Screen