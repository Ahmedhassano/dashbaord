import LineChart from "../charts/LineChart";
import {HiDownload} from "react-icons/hi"
import { mockLineData,mockTransactions } from "@/app/data";
export default function Middlesection() {
  return (
    <div className=" relative grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[2fr_1fr] gap-2">
         <div className="h-80  grid grid-cols-[fit-contnet_1fr] dark:dark-mode light-mode">
           <div className="flex justify-between items-end px-3 py-2">
             <div className="">
                <h3 className=" text-lg font-bold ">revent generted</h3>
                <p className=" text-teal-400">$59.342.32</p>
             </div>
              <HiDownload className=" text-xl text-teal-400"/>
           </div>
           <div className="h-64  overflow-x-auto ">
             <div className="w-full min-w-[600px] h-full pb-1"><LineChart data={mockLineData} /></div>
           </div>
         </div>   
         <div className=" relative h-80 space-y-1 bg-slate-900 overflow-y-auto">
            <h3 className="  p-1 font-medium dark:dark-mode light-mode">recent trantions</h3>
            <div className="w-full space-y-2 ">
              {mockTransactions.map(el=>
                 <div className="flex justify-between items-center text-sm  p-1 w-full dark:dark-mode light-mode">
                   <p className="flex flex-col">
                     <span className=" text-teal-400">{el.txId }</span>
                     <span>{el.user}</span>
                   </p>
                   <p className="">{el.date}</p>
                   <p className=" bg-teal-400 rounded-sm p-1">{el.cost}</p>
                 </div>
              )}  
            </div>  
         </div>
    </div>
  )
}
