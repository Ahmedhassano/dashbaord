import {MdEmail} from "react-icons/md"
import {BiSolidTraffic} from "react-icons/bi"
import {FaCashRegister} from "react-icons/fa"
import {HiUserAdd} from "react-icons/hi"
import RatioCircle from "../RatioCircle"
export default function Topsection() {
  return (
    <div className=' grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className="flex justify-between px-2 py-5 dark:dark-mode light-mode rounded-sm">
           <div className=" space-y-1">
              <MdEmail className=" text-xl text-teal-400"/>
              <p>12.451</p> 
              <p className="text-teal-400">eamils sent</p>   
           </div> 
           <div className="flex flex-col items-center">
             <RatioCircle size={"30px"} ratio={24}/>
             <p>+24%</p>
           </div>
        </div> 
        <div className="flex justify-between px-2 py-3 dark:dark-mode light-mode rounded-sm">
           <div className="space-y-1">
              <FaCashRegister className=" text-xl text-teal-400"/>
              <p>12.451</p> 
              <p className="text-teal-400">eamils sent</p>   
           </div> 
           <div className="flex flex-col items-center">
             <RatioCircle size={"30px"} ratio={26}/>
             <p>+26%</p>
           </div>
        </div> 
        <div className="flex justify-between px-2 py-3 dark:dark-mode light-mode rounded-sm">
           <div className="space-y-1">
              <HiUserAdd className=" text-xl text-teal-400"/>
              <p>12.451</p> 
              <p className="text-teal-400">eamils sent</p>   
           </div> 
           <div className="flex flex-col items-center">
             <RatioCircle size={"30px"} ratio={34}/>
             <p>+34%</p>
           </div>
        </div> 
        <div className="flex justify-between px-2 py-3 dark:dark-mode light-mode rounded-sm">
           <div className="space-y-1">
              <BiSolidTraffic className=" text-xl text-teal-400"/>
              <p>12.451</p> 
              <p className="text-teal-400">eamils sent</p>   
           </div> 
           <div className="flex flex-col items-center">
             <RatioCircle size={"30px"} ratio={75}/>
             <p>+75%</p>
           </div>
        </div>         
    </div>
  )
}
