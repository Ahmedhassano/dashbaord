"use client"
import { useContext } from "react"
import { themeContext } from "./themeProvider" 
import {AiOutlineSetting,AiOutlineBell,AiOutlineMenu} from "react-icons/ai"
import {BsPerson,BsFillMoonFill} from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi"
import {GiSun} from "react-icons/gi"
export default function Header() {
  let {dark,open,setDark,setOpen}=useContext(themeContext)
  return (
    <header style={{gridArea:"header"}} className=" flex justify-between  p-4 z-30">
   

        <div className="p-1 flex items-center dark:dark-mode light-mode rounded-sm ">
            <input type="text" placeholder="search" className=" bg-transparent " />
            <BiSearchAlt2 className=" cursor-pointer text-lg "/>   
        </div>
   
       <div className="flex gap-1  text-lg dark:text-white text-gray-600 ">
         <div onClick={()=>setDark(!dark)} className="cursor-pointer">
          {dark?<GiSun/>:<BsFillMoonFill/>}
         </div>
         <AiOutlineBell className="cursor-pointer"/>
         <AiOutlineSetting className="cursor-pointer"/>
         <BsPerson className="cursor-pointer"/>
         <AiOutlineMenu onClick={()=>setOpen(!open)} className="inline-block md:hidden cursor-pointer"/>
       </div>
    </header>
  )
}
