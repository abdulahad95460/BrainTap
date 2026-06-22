import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [CurrentTime, setCurrentTime] = useState(0)
    useEffect(() => {
      const initialTime =  setInterval(()=>{
            setCurrentTime(CurrentTime=>CurrentTime+1)
        },1000);

        return () => clearInterval(initialTime)
    })
  return (
    <div className='stopwatch-settings'>
        StopWatch Seconds  ~ {CurrentTime}
    </div>
  )
}

export default Stopwatch