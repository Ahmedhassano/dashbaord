import Topsection from "./components/home/Topsection"
import Middlesection from "./components/home/Middlesection"
import Bottomsection from "./components/home/Bottomsection"
import Title from "./components/title"
import {BiSolidDownload} from "react-icons/bi" 
export default function Home() {
    return (
    <main style={{gridArea:"main"}} className="max-w-full min-h-fit pr-2 space-y-2 px-3">
      <div className="flex gap-3 justify-between flex-wrap">
        <Title title="dashboard" subTitle="welcome to your dashboard"/>  
        <button className="flex items-center self-end gap-2 p-1 dark:bg-violet-900  bg-violet-400">
            <BiSolidDownload/>
           <p className="font-medium">download reports</p>
        </button>
      </div> 
      <section className="grid gap-2 ">
         <Topsection/>
         <Middlesection/>
         <Bottomsection/>
      </section>
    </main>
  )
}
