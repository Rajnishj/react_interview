import React, { useEffect, useState } from 'react'

const Timer = () => {
    let initialTimer =10
    const [timer, setTimer] = useState(initialTimer)
    const [isPaused, setIsPaused] = useState(true)

    useEffect(() => {
        let intervalId;

        if(!isPaused){
            intervalId = setInterval(() => {
                setTimer((prev) => prev !== 0 ? prev - 1 : 0)
            },1000)
        }
        return () => clearInterval(intervalId)
    },[isPaused])

    const handleStart = () => {
        setIsPaused(false)
    }
    const handlePause = () => {
        setIsPaused(true)
    }
    const handleReset = () => {
        setIsPaused(true)
        setTimer(initialTimer)
    }
  return (
    <div className='mt-6 mb-6 flex flex-col items-center'>
      <h1 className='text-4xl'>Countdown Timer</h1>
      <h1 className='text-3xl mt-2 mb-2'>{timer}</h1>
      <div>
        <button onClick={handleStart} className='rounded-md w-[100px] p-2 mr-2 bg-orange-300'>Start</button>
        <button onClick={handlePause} className='rounded-md w-[100px] p-2 mr-2 bg-orange-300'>Pause</button>
        <button onClick={handleReset} className='rounded-md w-[100px] p-2 mr-2 bg-orange-300'>Reset</button>
      </div>
    </div>
  )
}

export default Timer
