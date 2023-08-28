import Title from "../components/Title";
import { mockDataTeam } from "../data";
import {MdOutlineAdminPanelSettings,MdOutlineSecurity}from "react-icons/md"
import {PiLockKeyBold} from "react-icons/pi" 
export default function mangeTeam() {
  let checkLevel=(level)=>{
     switch (level) {
      case "admin":
        return <td className="max-w-[120px] flex items-center justify-center gap-2 bg-emerald-500 my-2 mx-auto rounded-sm ">
                <MdOutlineAdminPanelSettings/> <span>Admin</span>
               </td> ;
      case "manager":
         return <td className="max-w-[120px] flex items-center justify-center gap-2 bg-emerald-700  my-2 mx-auto rounded-sm ">
                  <MdOutlineSecurity/> <span>manager</span>
               </td>  ;  
      default:
        return <td className="max-w-[120px] flex items-center justify-center gap-2 bg-emerald-400 my-2 mx-auto rounded-sm ">
                  <PiLockKeyBold/> <span>user</span>
              </td>  ;
     } 
  }
  return (
    <main className="px-2">
       <Title title={"Team"} subTitle={"managing the team members"}/>
       <section className=" table-container">
          <table className="table">
              <thead>
                <tr className="">
                  <th className="table-header"><input type="checkbox" className="" /></th>
                  <th className=" table-header">id</th>
                  <th className=" table-header">name</th>
                  <th className=" table-header">age</th>
                  <th className=" table-header">phone Number</th>
                  <th className=" table-header">email</th>
                  <th className=" table-header">acessLevel</th>
                </tr>
              </thead>
              <tbody>
                {mockDataTeam.map(el=> 
                     <tr className=" table-row">
                        <td><input type="checkbox" className="" /></td>
                        <td className=" whitespace-nowrap">{el.id}</td>
                        <td className="whitespace-nowrap text-teal-500 ">{el.age}</td>
                        <td className="whitespace-nowrap ">{el.phone}</td>  
                        <td className="whitespace-nowrap ">{el.email}</td>  
                        <td className="whitespace-nowrap ">{el.access}</td>  
                        {checkLevel(el.access)}       
                     </tr> )}
              </tbody>
          </table>
          <div className="w-full h-10 self-center bg-indigo-800"></div>
       </section>
    </main>
  )
}
