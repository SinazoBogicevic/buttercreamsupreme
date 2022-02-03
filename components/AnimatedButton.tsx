import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { Opacity } from "@material-ui/icons";

export const AnimatedButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = { Opacity: 1 };

  const containerVariants = {
    open: {
      height: `300px`,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
    closed: {
      height: `280px`,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: "afterChildren",
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const ICON_STATICS = [
    {
      key: "facebook",
      reactIcon: <FaFacebookF />,
      styles: "transform hover:bg-blue-600 text-blue-700 ",
    },
    {
      key: "facebook",
      reactIcon: <FaInstagram />,
      styles: "transform hover:bg-red-600 text-red-700",
    },
    {
      key: "facebook",
      reactIcon: <FaWhatsapp />,
      styles: "transform hover:bg-green-600 text-green-700",
    },
    {
      key: "facebook",
      reactIcon: <IoCallSharp />,
      styles: "transform hover:bg-pink-500 text-pink-700",
    },
  ];

  return (
    <>
      <motion.div
        className="flex p-1 flex-col items-center justify-center  w-16"
        initial={`closed`}
        animate={isOpen ? `open` : `closed`}
        variants={containerVariants}
      >
        {ICON_STATICS.map(({ key, reactIcon, styles }) => (
          <motion.div
            key={key}
            initial={{ opacity: 1 }}
            variants={childVariants}
            className={`flex  items-center justify-center mb-2  text-2xl p-0 w-12 h-12 justify-center  bg-white hover:text-white rounded-full  focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-30 ${styles}`}
          >
            {reactIcon}
          </motion.div>
        ))}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex  items-center justify-center mb-2 text-2xl p-0 w-12 h-12 text-primary-darkest bg-white rounded-full hover:bg-primary-darkest hover:text-white focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-30"
        >
          <FiMessageSquare />
        </motion.button>
      </motion.div>
    </>
  );
};

export default AnimatedButton;
