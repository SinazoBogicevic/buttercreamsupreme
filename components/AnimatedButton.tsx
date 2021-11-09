import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

//color instagram bg:  #e1306c

export const AnimatedButton = () => {
  return (
    <div className="flex flex-col">
      <button className="flex  items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <FaFacebookF />
      </button>
      <button className="flex items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <FaInstagram />
      </button>

      <button className="flex items-center justify-center mb-2 text-2xl p-0 w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <FaWhatsapp />
      </button>
      <button className="flex items-center justify-center text-2xl p-0 w-12 h-12 bg-pink-500 text-white rounded-full hover:bg-pink-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <IoCallSharp />
      </button>
    </div>
  );
};

export default AnimatedButton;
