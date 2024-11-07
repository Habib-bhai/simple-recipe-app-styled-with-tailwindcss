"use client"

import Image from "next/image";
import { useState } from "react"


export default function Navbar(){
  const [isOpen, setIsOpen] = useState("hidden");

  
    return <>
    <div className="flex justify-start items-center relative pl-20 gap-10">
      <div className="flex justify-center items-center">

      <div className="bg-[url('/images/Group.png')] h-10 w-10 mr-3 bg-cover bg-center bg-no-repeat"></div>
    <h2 className="font-serif font-bold text-2xl">BROS RECIPES</h2>
      </div>

    <ul className="max-w-full hidden md:flex justify-center items-center gap-5 ">
        <a href="/" className=" w-16 p-1 bg-black rounded-3xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>HOME</li></a>
        <a href="/aboutus" className="w-16 p-1 bg-black rounded-3xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>ABOUT</li></a>
        <a href="/recipe" className="w-16 p-1 bg-black rounded-3xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>RECIPE</li></a>
    </ul>
    <button className="md:hidden" onClick={()=> setIsOpen("flex")} style={{ fontSize: '2rem' }}>
        ☰
      </button>


      <div className={`md:hidden ${isOpen} flex-col justify-center items-center bg-white/50 backdrop-blur-xl z-10 h-screen w-screen absolute top-0 left-0`}> 
{/* sideBar */}
        <Image onClick={() => setIsOpen("hidden")} src={"/images/close.svg"} alt="meatball" height={30} width={30} className="absolute top-5 right-16 bg-[#ec4700] shadow-lg shadow-black"/>

<ul className="max-w-full flex flex-col justify-center items-center gap-5 ">
        <a href="/" className="w-24 text-center p-1 bg-black rounded-2xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>HOME</li></a>
        <a href="/aboutus" className="w-24 text-center p-1 bg-black rounded-3xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>ABOUT</li></a>
        <a href="/recipe" className="w-24 text-center p-1 bg-black rounded-3xl transition-colors duration-500 ease-in-out hover:bg-[#ec4700] hideOnMobile"><li>RECIPE</li></a>
    </ul>

      </div>
      
    </div>
   
    </>
}