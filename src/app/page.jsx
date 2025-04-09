"use client";
import Image from "next/image";
import { useEffect,useRef } from "react";
// import * as motion from "motion/react-client"
import { Portofolio } from "@/app/components/portofolio"
import { Logo } from "@/app/components/logo"
import { Read } from "@/app/components/read" 
import { Faq } from "@/app/components/faq" 
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="">
      <Portofolio />
      <Logo />
      <Read />
      <Faq />
      <Footer />
    </div>
  )
}