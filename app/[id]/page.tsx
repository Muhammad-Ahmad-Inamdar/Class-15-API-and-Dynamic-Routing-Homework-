import Link from "next/link"
export default async function UserDetails(props:any) {
    // console.log('hahaahahah')
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const res = await url.json()
    console.log('aray wayh',res)


return(
    <main className="min-h-lvh p-6 bg-black flex flex-col">
        <h1 className="text-[28px] font-bold text-center pb-2 text-white">User Details</h1>
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="h-[230px] w-[350px] border-2 border-blue-400 mt-6">
                <ul className="text-blue-300 flex pl-8 pt-4 pb-4 gap-2 flex-col text-[18px]">
                    <li>Name : <strong className="text-white">{res.name}</strong></li>
                    <li>Eamil : <u className="text-[16px] cursor-pointer text-white">{res.email}</u></li>
                    <li>Phone : <u className="text-[16px] cursor-pointer text-white">{res.phone}</u></li>
                    <li>Website : <u className="text-[16px] cursor-pointer text-white">
                    <Link href={`https://${res.website}`} target="_blank" rel="noopener noreferrer">
                    {res.website}
                        </Link>
                    </u></li>
                    <li>Address : <strong className="text-[16px] text-white">{res.address.street} , {res.address.city}</strong></li>
                    <li>Company : <strong className="text-[16px] text-white">{res.company.name}</strong></li>
                </ul>

                
            </div>
        </div>

    </main>
)    
}