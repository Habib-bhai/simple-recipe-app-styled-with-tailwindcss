import Card from "@/components/Card/Card"


export default function Hello() {
  return ( <>
  
  {/* <SideBar styleClass="hide"/> */}
    <h1 className="relative w-96  font-semibold my-10 ml-12 text-4xl before:contents-[''] before:w-96 before:h-12 before:bg-[#ec4700] before:absolute before:bottom-0 before:left-0 before:z-[-1] before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-100 before:shadow-xl before:shadow-[#015e4e] before:rounded-lg  ">POPULAR RECIPES</h1>

    <div className="flex flex-wrap justify-evenly">
    <Card url="/images/meatball.png" href="/recipe/popular/meatBall" title="Easy Meat Balls"/>
    <Card url="/images/steak.png" href="/recipe/popular/steak"  title="Best Steak & Veggies" />
    <Card url="/images/bakedEgg.png"  href="/recipe/popular/bakedEggs" title="Baked Eggs in Blanket" />
    <Card url="/images/raspberry.png" href="/recipe/popular/raspberry" title="Home-made Raspberry" />
    </div>
  </>
  )
}