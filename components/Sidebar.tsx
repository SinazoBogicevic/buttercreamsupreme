import List from "@material-ui/core/List";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import "../styles/tailwind.css";

export type props = {
  active?: boolean;
  links: { path: string; link: string }[];
};

export default function Sidebar({
  links,
  active = false,
}: props): ReactElement {
  const variants = {
    open: {
      height: "100vh",
      width: "100%",
      transition: {
        duration: 0.4,
      },
      opacity: 1,
    },
    closed: {
      height: "0vh",
      width: "0%",
      transition: {
        duration: 0.4,
      },
      opacity: 0,
    },
  };
  const ListItemLink = links.map(({ path, link }) => {
    return (
      <motion.ul className="flex flex-col justify-items-center items-center text-white">
        <li className="mt-16 uppercase cursor-pointer">{link}</li>
      </motion.ul>
    );
  });
  return (
    <motion.div
      initial={"closed"}
      animate={active ? `open` : `closed`}
      variants={variants}
      className="w-screen h-screen bg-primary-darkest"
    >
      {ListItemLink}
    </motion.div>
  );
}
