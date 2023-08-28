import Title from "../components/Title"
import { mockDataInvoices } from "../data"

export default function invoices() {
  return (
    <main className="px-2">
    <Title title={"invoices"} subTitle={"lists of invoices balances"}/>
    <section className=" table-container">
       <table className="table">
           <thead>
             <tr className="">
               <th className="table-header"><input type="checkbox" className="" /></th>
               <th className=" table-header">ID</th>
               <th className=" table-header">name</th>
               <th className=" table-header">phone Number</th>
               <th className=" table-header">email</th>
               <th className=" table-header">cost</th>
               <th className=" table-header">Date</th>
             </tr>
           </thead>
           <tbody>
             {mockDataInvoices.map(el=>     
                  <tr className=" table-row">
                     <td><input type="checkbox" className="" /></td>
                     <td className=" table-td">{el.id}</td>
                     <td className="table-td ">{el.name}</td>  
                     <td className="table-td">{el.phone}</td>  
                     <td className="table-td ">{el.email}</td>  
                     <td className="table-td  text-teal-500 ">{el.cost}</td>
                     <td className="table-td">{el.date}</td>  
                  </tr> )}
           </tbody>
       </table>
       <div className="w-full h-10 self-center bg-indigo-800"></div>
    </section>
 </main>
  )
}
