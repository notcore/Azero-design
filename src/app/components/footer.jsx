import { Button } from "@/app/components/mikro/button";

function Footer(){
    return(
    <div className="bg-gray-100 flex flex-col h-[300px] justify-between">
    <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-black/85 mb-6">Sign up today.</h1>
        <a className="bg-black/85 md:order-1 mx-auto px-3 py-2 rounded-lg shadow-xl shadow-black/20 text-white font-bold">
            Get started
        </a>
    </div>
    <footer className="bg-black/85 text-white text-center flex py-4">
        <p className="mr-auto ml-10">©Hyuman.let 2025</p>
    </footer>
    </div>
    )
}

export { Footer }