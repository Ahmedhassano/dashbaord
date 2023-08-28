"use client"
import { useState,useRef, useEffect } from "react"
import {IoIosArrowDown} from "react-icons/io"
export default function Question({title,contentText}) {
   let content=useRef() 
   let [show,setShow]=useState(false)
   let [contentSize,setcontentSize]=useState(0) 
   useEffect(()=>{
    setcontentSize(content.current.scrollHeight)
   },[])
  return (
    <div className=" space-y-2 dark:text-white text-black dark:bg-zinc-800 bg bg-teal-800     p-2 rounded-sm">
        <div className="flex justify-between">
            <p className=" text-teal-500">{title}</p>
           <IoIosArrowDown className={`${show?"rotate-180 ":"rotate-0"} cursor-pointer`} onClick={()=>setShow(!show)} /> 
        </div> 
        <div style={{height:show?`${contentSize}px`:`0px`}} ref={content} className=" duration-150 overflow-hidden">
            {contentText}
        </div>
    </div>
  )
}
