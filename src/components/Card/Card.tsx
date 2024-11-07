import Image from "next/image"
import Link from "next/link"
export default function Card({ href, url, title }: { href: string, url: string, title: string }) {

    return  <Link href={href} passHref>
    <div className="relative scale-100 transition-transform duration-500 ease-in-out hover:scale-110 mb-10">
            <Image src={url} alt="meatball" height={350} width={250} className="rounded-2xl opacity-70" />
            <h3 className="absolute bottom-6 left-6 z-10">{title}</h3>
            <div className="absolute bottom-1 left-6 text-[12px] z-10 flex justify-center items-center gap-10">
                <p className="bg-gray-600/70 w-8 text-center">Tags</p>
                <p className="bg-gray-600/70 w-8 text-center">Tags</p>
                <p className="bg-gray-600/70 w-8 text-center">Tags</p>
            </div>

        </div>
    </Link>
}