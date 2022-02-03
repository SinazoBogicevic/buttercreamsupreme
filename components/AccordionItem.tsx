import React, { useState } from "react";
import "../styles/tailwind.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

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
  const [click, setClick] = useState(true);
  const handleClick = () => setClick((prev) => !prev);
  const variants = {
    open: {
      height: "240px",
      // opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: 0,
      // opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const answerVariants = {
    open: {
      height: "180px",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="flex flex-col text-primary-medium p-4">
      <div className="flex justify-between items-end px-6">
        <p>What is a cake?</p>
        <div onClick={handleClick} className="mb-2">
          {click ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </div>
      </div>
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
          Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
          amet fugiat incididunt proident. Labore aute exercitation quis
          occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
          proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
          enim nisi amet fugiat incididunt proident.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
