"use client"
import Title from "../components/Title"
import Input from "../components/Input"

export default function createUser() {
  return (
    <main className="px-2">
       <Title title={"create User"} subTitle={"create a new user profile"}/> 
       <form className="flex flex-col gap-5 items-end justify-stretch mt-3  ">
          <Input 
            type={"text"}
             name={"first name"}
             invalidMassage="invalid name"
             pattern={/[a-z]{3,7}/}/>
        
          <Input
           type={"text"}
           name={"last name"} 
           invalidMassage="invalid name"
           pattern={/[a-z]{3,7}/}/> 
          
          <Input 
            type={"text"}
            name={"email"}
            invalidMassage="invalid email"
            pattern={/\w{3}@gmail.com/i}/> 
          
          <Input 
            type={"text"}
            name={"phone numebr"}
            invalidMassage="this number invalid"
            pattern={/\d{10,15}/}/> 
          
          <Input 
            type={"text"}
            name={"adress 1"} 
            invalidMassage="this address invalid"
            pattern={/\w{5,10}/}/> 
          <Input
            type={"text"}
            name={"adress 2"}
            invalidMassage="this address invalid"
            pattern={/\w{5,10}/}/> 
          
          <input className="w-fit p-1 bg-green-400 text-sm rounded-md " type="submit" value="create new user" />         
       </form>
    </main>
  )
}
