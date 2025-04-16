"use client";
import Image from "next/image";
// import { useEffect,useRef } from "react";
// import * as motion from "motion/react-client"
import { Portofolio } from "@/app/components/portofolio"
import { Logo } from "@/app/components/logo"
import { Read } from "@/app/components/read" 
import { Faq } from "@/app/components/faq" 
import { Footer } from "@/app/components/footer";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    {loading ? (
      <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
        <div className="animate-spin border-t-4 border-blue-500 rounded-full w-12 h-12 border-4"></div>
      </div>
    ) : (
      <>
        <Portofolio />
        <Logo />
        <Read />
        <Faq />
        <Footer />
      </>
    )}
  </>
  )
}