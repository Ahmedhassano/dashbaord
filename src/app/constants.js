import {AiOutlineHome,AiFillDatabase,AiOutlineCalendar,AiFillPieChart} from "react-icons/ai"

import {MdContacts,MdManageAccounts} from "react-icons/md"
import {BsFillPersonFill,BsBarChartLineFill} from "react-icons/bs"
import {BiLineChart} from "react-icons/bi"
import {FaQuestion} from "react-icons/fa"
export let links=[
{
 type:"link",
 href:"/",
 title:"dashboard",
 icon:AiOutlineHome
},
{
    type:"head",
    title:"Data",
},
{
    type:"link",
    href:"/mangeTeam",
    title:"mange team",
    icon:MdManageAccounts
},
 
 
 {
    type:"link",
    href:"/invoices",
    title:"invoices balance",
    icon:AiFillDatabase
 }, 
{
type:"head",
title:"pages",
},
{
 type:"link",
 href:"/profileform",
 title:"profile form",
icon:BsFillPersonFill
 },
 {
 type:"link",
 href:"/faqpage",
title:"faQ page",
 icon:FaQuestion
  },
 {
  type:"head",
  title:"charts",
  },
 {
 type:"link",
  href:"/Barchart",
  title:"bar chart",
  icon:BsBarChartLineFill
}, 
 {
type:"link",
 href:"/Piechart",
 title:"pie chart",
icon:AiFillPieChart
  }, 
  {
  type:"link",
  href:"/linechart",
  title:"line Chart",
 icon:BiLineChart
 }  

]

