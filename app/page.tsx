import Link from "next/link";

export default async function Home() {
const url = await fetch("https://jsonplaceholder.typicode.com/users");
const res = await url.json();
console.log(res);

return (
  <main className="bg-black min-h-lvh">
    <h1 className="text-center text-white font-bold text-4xl uppercase pt-4"> Jason Place Holder API (User)</h1>
    <div className="flex flex-col text-white border-4  border-blue-400 w-[380px] pb-4 pt-4 mx-auto mt-8 ">  
    {res.map((user:any)=>(
    <div key={user.id} className="flex w-[420px]">

      <p className="text-[20px] flex flex-col w-1/4 text-center ">{user.id}</p>
      <Link href={`${user.id}`}>
       <p className="text-[20px] text-left cursor-pointer ">{user.name}</p>
      </Link>
    </div>
      
    ))}
    </div>
  </main>

)
}


