/** This is another Atomic Component */
/** 
 * Used in the following files:
 * NavigationMenuCustom.tsx
 * Navigation.tsx
 * navigation-menu.txt
 */
import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = (props:any) => {
 
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="li"
    >
      <div className="icon-placeholder"  />
      <div onClick={props.toggle}><a href={props.url} className="text-lg text-white">{props.i}</a></div>
    </motion.li>
  );
};
