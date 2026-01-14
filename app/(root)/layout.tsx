import Header from "@/modules/home/header"
import { Metadata } from "next"
import Footer  from "@/modules/home/footer"
import { cn } from "@/lib/utils"
export const metadata: Metadata = {
    title: {
        template: "VibeCode -  Editor",
        default: "Code Editor For VibeCoders - VibeCode",
    }
}


export default function HomeLayout({
    children
}: {children:React.ReactNode}){
    return(
        <>
        <Header/>
        <div className={cn("absolute inset-0","[background-size:40px_40px]", "[background-image:linear-gradient(to-right,#e4e4e7_1px, transparent_1px),linear-gradient(to-bottom,#e4e4e7_1px,transparent_1px)]",)}/>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-content bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%, black)] dark:bg-black"/>

       <main className="z-20 relative w-full pt-0">
        {children}
       </main>
        <Footer/>
        </>
    )
}