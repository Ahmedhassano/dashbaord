export default function RatioCircle({size,ratio}) {
  return (
    <div style={{
               width:`${size}`,
               height:`${size}`,   
               backgroundImage:`conic-gradient(#42f0d6 ${ratio}%,#9452ff ${ratio}%)`}}
         className={` relative  rounded-full`}>
       <div className=" dark:bg-slate-800 bg-slate-200 absolute inset-[10%] rounded-full "></div> 
      
    </div>
  )
}
