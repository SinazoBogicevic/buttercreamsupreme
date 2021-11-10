import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

//color instagram bg:  #e1306c

export const AnimatedButton = () => {
  return (
    <div className="flex flex-col w-16">
      <motion.button
        animate={{ y: 0 }}
        initial={{ y: 120 }}
        transition={{ duration: 0.4 }}
        className="flex  items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-white text-blue-600 rounded-full hover:bg-blue-700 hover:text-white focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-0"
      >
        <FaFacebookF />
      </motion.button>
      <motion.button
        animate={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 0.367 }}
        className="flex items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-white text-red-600 rounded-full hover:bg-red-700 hover:text-white focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-10"
      >
        <FaInstagram />
      </motion.button>

      <motion.button
        animate={{ y: 0 }}
        initial={{ y: 60 }}
        transition={{ duration: 0.36 }}
        className="flex items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-white text-green-600 rounded-full hover:bg-green-700 hover:text-white focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-20"
      >
        <FaWhatsapp />
      </motion.button>
      <motion.button className="flex items-center justify-center text-2xl p-0 w-12 h-12 bg-white text-pink-500 rounded-full hover:bg-pink-700 hover:text-white focus:scale-110 motion-reduce:transform-none  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-30">
        <IoCallSharp />
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
