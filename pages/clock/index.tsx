import { useState, useEffect } from 'react';
import type { NextPage } from 'next'

const FlipClock: NextPage = () => {
  const [hour, setHour] = useState<String>();
  const [minute, setMinute] = useState<String>();
  
  useEffect(() => {
    setInterval(() => {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      setHour(hour < 10 ? `0${hour}` : hour.toString());
      setMinute(minute < 10 ? `0${minute}` : minute.toString());
    }, 1000);
  }, [])

  return (
    <div className='flex justify-center items-center h-screen bg-gray-700'>
      <div className='w-3/5 h-72 flex justify-center items-center bg-slate-300 rounded-xl border-[20px] border-slate-300'>
        <div className='w-full text-center relative'>
          <div className='bg-black text-9xl text-white pt-9 pb-12 m-3 rounded-3xl'>{hour}</div>
          <div className='w-full h-[1px] absolute top-2/4 bg-slate-300'/>
        </div>
        <div className='w-full text-center relative'>
          <div className='bg-black text-9xl text-white pt-9 pb-12 m-3 rounded-3xl'>{minute}</div>
          <div className='w-full h-[1px] absolute top-2/4 bg-slate-300'/>
        </div>
      </div>
    </div>
  );
}

export default FlipClock;
