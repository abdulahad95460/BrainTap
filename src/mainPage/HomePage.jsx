import React, { useEffect, useState } from 'react'
import Questions from '../Question'


const HomePage = () => {

    const [homeDisplay, sethomeDisplay] = useState(false)
    useEffect(() => {
  if (homeDisplay) {
    alert("Hey User, as you tapped the play button , remember there's a stopwatch to track how much time will it take you to complete that game ");
  }
}, [homeDisplay]);

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