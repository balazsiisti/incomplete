import { useState, useEffect } from 'react';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [displayHour, setDisplayHour] = useState(new Date().getHours());
  const [displayMinute, setDisplayMinute] = useState(new Date().getMinutes());
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDisplayHour(date.getHours())
      setDisplayMinute(date.getMinutes())
    }, 1000);
  }, [])

  return (
    <div className='bg-slate-600 w-screen h-screen flex justify-center items-center'>
      <div className='text-9xl text-white bg-black rounded-xl p-6 m-5'>{displayHour}</div>
      <div className='text-9xl text-white bg-black rounded-xl p-6 m-5'>{displayMinute}</div>
    </div>
  )
}

export default Home
