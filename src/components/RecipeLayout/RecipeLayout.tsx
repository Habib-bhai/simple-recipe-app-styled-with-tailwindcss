import Image from "next/image";


export default function RecipeLayout({title,imgUrl, children }: {title:string, imgUrl:string, children:string}) {

    return <div className=" w-full flex flex-col justify-center items-center overflow-x-hidden">

    <h1 className="mt-6 font-roboto text-2xl font-bold">{title}</h1>
    <Image src={imgUrl} alt="image" height={450} width={500} className="rounded-2xl mt-10" />
    <p className="w-3/4 mt-9">{children}</p>
    
    </div>
}