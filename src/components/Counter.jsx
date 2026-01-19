import { useState } from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count+1);
    localStorage.setItem(count)
  }

  function handleSubtract(){
    if(count>0){
      setCount(count-1);
    }
  }

  function handleClear(){
    setCount(0);
  }

  return (
    <div className='bg-yellow-400 w-80 h-60 border-2 shadow-2xl flex justify-center items-center flex-col gap-7'>
      <h1 className=' text-3xl font-bold'>Count:{count}</h1>
      <div className=' flex gap-2.5'>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleClear}>Clear</button>
      </div>
      {count>=10 && (
        <div>
          <div>Horray!</div>
        </div>
      )}
    </div>
  )
}

export default Counter