"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { faqInterface } from "../Accordian/Accordian";
import Accordian from "../Accordian/Accordian";
import faq from "../../json/faq.json";
import cards from "../../json/cards.json";
import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import "./styles.css";
import {
  LazyMotion,
  motion,
  domAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import AnimatePresent from "../AnimatePresent/AnimatePresent";
import AnimateOnView from "../AnimateOnView/AnimateOnView";

// setInterval(() => {
//   console.log(document.getAnimations());
// }, 1000);

export default function Introduction() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    delay: 0.2,
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [items, setItems] = useState(cards);

  useEffect(() => {
    setTimeout(() => {
      const animation = animate(count, 25, { duration: 2 });
      return animation.stop;
    }, 2000);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={spring}
            className="text-4xl m-24"
          >
            Framer Motion
          </motion.h1>
          <div className="grid grid-cols-2 place-items-center sm:grid-cols-1 sm:grid-rows-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={spring}
            >
              <p className="text-2xl p-20 sm:p-4">
                Framer Motion is a powerful React animation library that
                leverages the capabilities of the Framer prototyping tool. It
                enables UI designers and developers to achieve seamless
                application delivery by providing intuitive and expressive
                animation capabilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={spring}
              className="flex flex-col gap-5 items-center"
            >
              <p className="text-xl">Bundling Size Impacts Performance</p>
              <div className="flex place-items-center gap-2 leading-tight">
                <motion.h1 className="text-5xl text-red-500 font-bold">
                  {rounded}
                </motion.h1>
                <p className="font-bold text-3xl">KiB</p>
              </div>
            </motion.div>
          </div>
        </div>
        <Marquee speed={200}>
          <p className="text-8xl font-bold m-0">
            A React Animation Library &#9889;
          </p>
        </Marquee>

        <Reorder.Group
          layout
          axis="x"
          onReorder={setItems}
          values={items}
          className="my-24 flex justify-center flex-wrap gap-5 p-20 sm:p-10"
        >
          {items.map((element: any) => (
            <Reorder.Item
              key={element.id}
              value={element}
              className="w-[300px] rounded-2xl bg-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-lg p-5"
            >
              <img
                className="rounded-2xl h-[160px] w-full"
                src={element.img}
                alt="cards"
              />
              <div className="flex flex-col p-2">
                <p className="text-xl">{element.title}</p>
                <p className="p-2">{element.description}</p>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <AnimateOnView>
          <div className="flex flex-wrap justify-around items-center gap-5">
            <div className="grid">
              <p className="text-9xl font-bold ">FAQs</p>
            </div>
            <div>
              {faq.map((element: faqInterface) => (
                <Accordian key={element.id} faq={element} />
              ))}
            </div>
          </div>
        </AnimateOnView>
      </div>
    </LazyMotion>
  );
}
