"use client";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // amount = seberapa banyak elemen harus kelihatan buat trigger animasi
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sm:flex opacity-[70%] md:gap-8 grid grid-cols-2 justify-center sm:gap-6 items-center gap-4 mx-20 md:my-8 my-12 flex-wrap"
    >
      {[
        { img: "vue.svg", label: "vue" },
        { img: "react.svg", label: "react" },
        { img: "tailwind-css.svg", label: "css" },
        { img: "laravel.svg", label: "php" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-center gap-2 my-3">
          <img className="w-[50px] grayscale" src={`/img/${item.img}`} />
          <h1 className="text-4xl font-bold text-gray-800/65">{item.label}</h1>
        </div>
      ))}
    </motion.div>
  );
}

export { Logo };
