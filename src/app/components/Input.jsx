"use client"
import { useState } from "react"
export default function Input({type,name,invalidMassage,pattern}) {
  let [invalid,setInvalid]=useState(false)   
  return (
    <div className={`${invalid?" my-2":"my-0"} relative w-full h-11 pt-3 dark:bg-gray-800 bg-slate-500`}>
       <input type={type}  
              required
              onChange={(e)=>setInvalid(!pattern.test(e.target.value))}
              className={`${invalid?"border-b-red-700":"border-b-slate-300"} 
                         w-full h-full peer/input 
                        dark:text-gray-300 text-black bg-transparent border-0 border-b-2 border-solid px-2 `}
               />
       <span className={` ${invalid?"text-red-700 ":"text-gray-400 "}
                         peer-focus/input:text-xs peer-valid/input:text-xs peer-focus/input:top-0 peer-valid/input:top-0
                        absolute top-1/4 left-2 first-letter:uppercase text-sm duration-150 pointer-events-none`}>{ name}</span>       
       <span className={`${invalid?"text-red-700 translate-y-full":"text-transparent translate-y-0"}
                          absolute bottom-0 left-3 translate-y-full duration-150
                          opacity-100 text-sm pointer-events-none
                       `}>{invalidMassage}</span>       
    </div>
  )
}

