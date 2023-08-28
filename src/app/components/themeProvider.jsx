"use client"
import { createContext,useState } from "react"
export let themeContext=createContext() 
export default function ThemeProvider({children}) {
  let [dark,setDark]=useState(true)
  let [open,setOpen]=useState(false)
  return (
    <html className={dark&&"dark"} lang="en">
      <themeContext.Provider value={{dark,open,setDark,setOpen}}>
        {children}
     </themeContext.Provider>     
    </html>
  )
}
