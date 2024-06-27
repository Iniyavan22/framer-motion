"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export type faqInterface = {
  id: number;
  question: string;
  answer: string;
};

export default function Accordian({ faq }: { faq: faqInterface }) {
  const { id, question, answer } = faq;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      key={id}
      onClick={() => setIsOpen(!isOpen)}
      className="w-[500px] sm:w-[300px] m-1 cursor-pointer"
    >
      <motion.h2
        layout
        className="bg-white p-2 rounded-xl"
      >
        {question}
      </motion.h2>
      <motion.p
        className={`rounded-xl ${isOpen ? "p-2" : ""} bg-blue-200`}
      >
        {isOpen ? answer : null}
      </motion.p>
    </motion.div>
  );
}
