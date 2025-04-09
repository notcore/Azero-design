"use client";
import Image from "next/image";
import { Button } from "@/app/components/mikro/button";
import { motion } from "framer-motion";

function Portofolio() {
  return (
    <div className="flex justify-center items-center" style={{ perspective: 1000 }}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid relative my-12 md:my-24 grid-cols-1"
      >
        <h1 className="text-[38px] text-blue-700 font-medium md:text-6xl font-Grost text-center">
          Portofolio.
        </h1>

        <motion.div
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }} // biar efek 3D kerasa
            className="mt-6 md:mt-12 md:px-18 rounded-3xl mx-auto px-9"
            >
            <img
                src="/img/portofolio.PNG"
                className="w-full rounded-3xl"
                alt="portofolio img"
            />
        </motion.div>

        <div className="grid grid-cols-1">
          <h1 className="text-center md:mt-6 md:order-2 md:text-[23px] mt-12 text-[17px] font-sans text-gray-400 mx-15">
            Welcome to a space where ideas <br />
            turn into visuals.
          </h1>
          <Button />
        </div>
      </motion.div>
    </div>
  );
}

export { Portofolio };
