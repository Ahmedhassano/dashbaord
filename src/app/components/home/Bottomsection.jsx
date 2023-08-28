import RatioCircle from "../RatioCircle"
import BarChart from "../charts/Barchart"
import { mockBarData } from "@/app/data" 
export default function Bottomsection() {
  return (
    <div className=' grid gap-2 grid-cols-1 md:grid-cols-2'>
       <div className="grid h-64 p-2 dark:dark-mode light-mode">
         <h3 className=" font-medium ">campagin</h3>
         <div className=" relative flex justify-center flex-col place-self-center  ">
           <RatioCircle size={"150px"} ratio={65}/>
           <div>
             <p>$48,325 revent genered</p>
           </div>
         </div>
       </div>
       <div className="flex  h-64 p-2 dark:dark-mode light-mode">
          <BarChart data={mockBarData}/>
       </div>
    </div>
  )
}
