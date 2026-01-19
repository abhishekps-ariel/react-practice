import React, { useState } from 'react'

function App() {

  const [bgColor, setBgColor]=useState('white')
  
  return (
    <>
    <div className=' bg-white h-screen w-screen flex justify-center duration-200' style={{backgroundColor:bgColor}}>
      <div className=' mt-130 absolute flex flex-wrap gap-10'>
        <div className='flex flex-wrap gap-10 bg-white px-5 py-3 rounded-3xl shadow-2xl border'>
        <button className=' bg-white border shadow-lg font-bold px-3 py-2 cursor-pointer rounded-3xl' onClick={()=>setBgColor('red')}>Red</button>
        <button className=' bg-white border shadow-lg font-bold px-3 py-2 cursor-pointer rounded-3xl' onClick={()=>setBgColor('blue')}>Blue</button>
        <button className=' bg-white border shadow-lg font-bold px-3 py-2 cursor-pointer rounded-3xl' onClick={()=>setBgColor('green')}>Green</button>
        <button className=' bg-white border shadow-lg font-bold px-3 py-2 cursor-pointer rounded-3xl' onClick={()=>setBgColor('White')}>Clear</button>
        </div> 
      </div>
    </div>
    </>
  )
}

export default App 