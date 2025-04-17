"use client";
import { motion } from "framer-motion";
import { Button } from "@/app/components/mikro/button";

function Read() {
  return (
    <div className="bg-gray-100  md:mt-12 grid py-14 grid-cols-1 min-h-screen">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid xl:mx-30  lg:px-24 md:mx-8 md:gap-8 place-items-center grid-cols-1 md:grid-cols-2 px-8"
      >
        <img
          className="rounded-2xl md:ml-auto md:max-h-[400px]"
          src="/img/ntahlah.PNG"
        />
        <div className="md:mr-auto  sm:mr-auto">
          <h1 className="text-2xl mt-6 md:text-4xl font-semibold font-Grost">IG Hyuman.let</h1>
          <p className="text-xl mt-3 md:text-2xl md:mt-6 text-gray-600/65">
            You’ve never made a website this fast before.
          </p>
          <button className="bg-black/85 md:max-w-[150px] md:mt-6 md:order-1 px-3 py-3 h-12 md:h-auto rounded-lg shadow-xl shadow-black/20 mt-6 text-white font-bold">
            Get started
          </button>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid xl:mx-30 lg:px-24 mt-12 md:mx-8 md:gap-8 place-items-center grid-cols-1 md:grid-cols-2 px-8"
      >
        <img
          className="rounded-2xl md:order-2 md:mr-auto md:max-h-[400px]"
          src="/img/ntahlah.PNG"
        />
        <div className=" md:ml-auto">
          <h1 className="text-2xl mt-6 md:text-4xl font-semibold font-Grost">IG Hyuman.let</h1>
          <p className="text-xl mt-3 md:text-2xl md:mt-6 text-gray-600/65">
            You’ve never made a website this fast before.
          </p>
          <button className="bg-black/85 md:max-w-[150px] md:mt-6 md:order-1 px-3 py-3 h-12 md:h-auto rounded-lg shadow-xl shadow-black/20 mt-6 text-white font-bold">
            Get started
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export { Read };
