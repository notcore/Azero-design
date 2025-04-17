import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Faq() {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const data = [
    {
      tanya: 'Pesan di Hyuman let!',
      jawab: 'Cuma 219.000 udah free domain + hosting.',
    },
    {
      tanya: 'Reward yang didapat?',
      jawab: 'Free fix bug + update pertama kali, revisi hingga puas sebelum deploy.',
    },
    {
      tanya: 'Pengerjaan berapa lama?',
      jawab: 'Paling cepat 8 jam bahkan 6 jam, tapi normalnya bisa 2 hari.',
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center my-12">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-[38px] md:text-6xl font-bold text-center mb-6">FAQ</h1>
        <div className="bg-gray-100/65 rounded-2xl mt-12 shadow p-4">

          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <div onClick={() => toggle(index)} className="flex gap-2 cursor-pointer">
                <i>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </i>
                <h2 className="text-lg font-semibold">{item.tanya}</h2>
              </div>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.p
                    key="jawaban"
                    className="text-gray-600 ml-10 mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.jawab}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export { Faq };
