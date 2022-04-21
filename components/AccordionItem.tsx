import React, { useState } from "react";
import "../styles/tailwind.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  styles?: string;
}

export const AccordionItem = ({
  question,
  answer,
  styles,
}: AccordionItemProps) => {
  console.log(process.env.REACT_APP_APIKEY);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);
  const ease = [0.04, 0.62, 0.23, 0.98];
  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: ease,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: ease,
      },
    },
  };

  const answerVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex flex-col text-primary-medium p-4 pb-0 mb-4">
      <div className="flex justify-between items-end px-6 border-b border-slate-50 pb-4">
        <p>{question}</p>
        <div onClick={handleClick} className="mb-2">
          {click ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {click && (
          <motion.div
            initial="closed"
            animate={click ? "open" : "closed"}
            variants={variants}
            className="bg-light-card-background text-dirt-brown px-6"
          >
            <motion.p
              initial="closed"
              animate={click ? "open" : "closed"}
              variants={answerVariants}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
