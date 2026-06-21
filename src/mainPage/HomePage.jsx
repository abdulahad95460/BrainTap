import React, { useState } from 'react'
import Questions from '../Question'



const HomePage = () => {
    const [homeDisplay, sethomeDisplay] = useState(false)

    if(homeDisplay){
        return <Questions />
    }
  return (
    <div className='homePageDiv'>
        <h1 className='homePageHeader'>Let's Start</h1>
        <button className='homePageButton' onClick={()=> sethomeDisplay(true)}>Click To Play</button>
    </div>
  )
}

export default HomePage