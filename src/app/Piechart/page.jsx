import Piechart from "../components/charts/Piechart"
import { mockPieData } from "../data"

export default function page() {
  return (
    <main className="w-full h-full">
        <section className="w-full h-full overflow-x-auto">
           <div className="w-full aspect-video min-w-[700px] ">
              <Piechart data={mockPieData}/>
           </div>
        </section>
    </main>
  )
}
