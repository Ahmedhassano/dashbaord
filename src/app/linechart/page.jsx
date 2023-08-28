import LineChart from "../components/charts/LineChart"
import { mockLineData } from "../data"
import Title from "../components/Title"
export default function linechart() {
  return (
    <main className='px-3 '>
      <Title title={"line chart"} subTitle={"simple line chart "}/> 
      <section className=' overflow-x-auto'>
         <div className="w-full relative mt-7 aspect-video min-w-[800px]">
           <LineChart data={mockLineData}/>
         </div>
      </section>
    </main>
  )
}
