import React, { useState } from 'react'

function App() {

  const [bgColor, setBgColor]=useState('white')
  
  return (
    <>
    <div className=' bg-white h-screen w-screen flex justify-center' style={{backgroundColor:bgColor}}>
      <div className=' mt-130 absolute flex flex-wrap gap-10'> 
        <button className=' bg-gray-200 border shadow-2xl px-3 py-2 cursor-pointer' onClick={()=>setBgColor('blue')}>Blue</button>
        <button className=' bg-gray-200 border shadow-2xl px-3 py-2 cursor-pointer' onClick={()=>setBgColor('red')}>Red</button>
        <button className=' bg-gray-200 border shadow-2xl px-3 py-2 cursor-pointer' onClick={()=>setBgColor('green')}>Green</button>
        <button className=' bg-gray-200 border shadow-2xl px-3 py-2 cursor-pointer' onClick={()=>setBgColor('White')}>Clear</button>
      </div>
    </div>
    </>
  )
}

export default App 