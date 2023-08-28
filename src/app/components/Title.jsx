
export default function Title({title,subTitle}) {
  return (
    <div className="">
      <h1 className="dark:text-white text-black uppercase text-2xl font-bold">{title}</h1>
      <p className=" text-teal-500">{subTitle}</p>
    </div>
  )
}
