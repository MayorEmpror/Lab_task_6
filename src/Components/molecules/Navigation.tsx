import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/Components/atoms/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggle }: {toggle: any}) => (
  <motion.ul variants={variants} className="ul">
    {itemIds.map((i,k)=> (
      <MenuItem i ={i} key={k} toggle={toggle} url={itemUrl[k]} />
    ))}
  </motion.ul>
);
const itemUrl = ["#home","#reasons","#status","#contact","#Inforamation","#steps","#WEBGL_SECTION_Mobile","#RequestDemo","#FAQs"]

const itemIds = ["Home","Why drone delivery?","Our Status","Customer Service","Inforamation","How to do it","Portfolio","Request Demo","FAQs"]



  //<a onClick={toggle}  href="#home" className="text-lg text-white">Home</a>,