"use client";

import { motion } from "framer-motion";
import { exit } from "process";
import ReactLoading from "react-loading";
import { FixedFlexCenter } from "@/Components/atoms/FlexCenter";
export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const animate = (variants: any, custom: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };
  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: "100%",
      top: "100%",
      transition: {
        duration: 0.6,
        delay: 0.05 * i,
      },
    }),
  };
  const overlay = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 1,
    },
  };
  const numberOfcol = 7;
  return (
    <>
      <div className="page_stairs ">
        <motion.div
          className="background"
          {...animate(overlay, 5)}
        ></motion.div>
        <motion.div
          className=" z-[1000] fixed top-[45vh] left-[45vw]"
          {...animate(overlay, 5)}
        >
          {" "}
          <ReactLoading type={"bars"} color="#0000ff" className="" />{" "}
        </motion.div>
        <div className="trans-container ">
          {[...Array(numberOfcol)].map((k, i) => {
            return (
              <motion.div
                {...animate(expand, numberOfcol - i)}
                key={i}
              ></motion.div>
            );
          })}
        </div>

        {children}
      </div>
    </>
  );
}
