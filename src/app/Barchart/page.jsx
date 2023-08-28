import { mockBarData } from "@/app/data" 
import BarChart from "../components/charts/Barchart"
import Title from "../components/Title"
export default function page() {
  return (
    <main className="px-3 overflow-x-auto">
        <Title title={"bar chart"} subTitle={"simple Bar chart"}/>
        <section className="w-full relative mt-7 aspect-video min-w-[800px]">
          <BarChart data={mockBarData}/>
        </section>
    </main>
  )
}
