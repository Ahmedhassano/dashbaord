"use client"
import { useState,useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import {AiOutlineClose} from "react-icons/ai"
import { links } from "../constants"
import { themeContext } from "./themeProvider" 
export default function AsideBar() {
  let [ActiveLink,setActiveLink]=useState("dashboard")
  let {open}=useContext(themeContext)
  console.log(open);
  return (
    <aside style={{gridArea:"aside"}}
          className={`${open?" translate-x-0 ":" -translate-x-full"} w-48  h-screen space-y-2 md:translate-x-0  fixed md:relative top-0 left-0 duration-150  dark:dark-mode light-mode py-2 z-40`}>
       <div className="flex justify-end items-center">
       </div>
       <div className="flex flex-col gap-2 items-center">
        
         <div className="text-center">
              <h3 className=" text-sm uppercase font-medium" >mr ahmed</h3>
              <p className=" text-sm text-teal-500">vp fanvy admin</p>
         </div>
       </div>
       <nav className=" mt-4">
        {links.map(el=>el.type=="link"?
           <Link
               href={el.href}
              onClick={()=>setActiveLink(el.title)}
              className={`${ActiveLink==el.title?" text-indigo-900":" text-gray-400"} 
                flex gap-3  text-xs font-medium my-3 ml-3`}>
              <el.icon className=" text-lg"/>
              <span className="first-letter:uppercase">{el.title}</span>  
           </Link>:
           <p className="text-gray-600 ml-2 text-sm font-bold">{el.title}</p> )}
      </nav>
    </aside>
  )
}
