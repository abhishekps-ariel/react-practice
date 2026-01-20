import React from 'react'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <>
    <div className=' h-screen w-screen bg-cover flex justify-center items-center' style={{backgroundImage: `url(https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg)`}}>
      <CurrencyConverter/>
    </div>
    </>
  )
}

export default App 