import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumAllowed) str+="0123456789";
    if(isCharAllowed) str+="!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char= Math.floor(Math.random()*str.length);   
      pass+=str.charAt(char); 
    }
    setPassword(pass);
    console.log(pass);
    
  },[length,isCharAllowed,isNumAllowed]);

  useEffect(()=>{
    generatePassword();
  },[length,isCharAllowed],isCharAllowed)

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password);
    window.alert("password copied")
  }

  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center bg-amber-300">
        <div className="border shadow-lg rounded-3xl flex flex-col items-center px-15 py-20 gap-5 bg-blue-200">
          <p className=" font-bold text-4xl">Lockify</p>
          <div className="flex w-full border-2 rounded-xl shadow-2xl">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 px-3 py-2 outline-none bg-gray-500 rounded-l-xl font-bold"
            />
             <button className="px-4 border-l-2 bg-blue-400  font-bold cursor-pointer active:bg-blue-500" onClick={copyToClipboard}>Copy</button>
            <button className="px-4 border-l-2 bg-green-400 rounded-r-xl font-bold cursor-pointer active:bg-green-500" onClick={generatePassword}>Generate</button>
          </div>
          <div className="flex gap-5 font-bold">
            <div>
              <div>
                <label htmlFor="length">Length : </label>
              <span>{length}</span>
              </div>
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="nums">Numbers</label>
              <input
                type="checkbox"
                defaultChecked={isNumAllowed}
                onChange={()=>{setIsNumAllowed((prev)=>!prev)}}  
              />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="chars">Characters</label>
              <input
                type="checkbox"
                defaultChecked={isCharAllowed}
                onChange={()=>{setIsCharAllowed((prev)=>!prev)}}  
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
 