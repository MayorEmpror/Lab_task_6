import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "@/Components/hooks/use-dimensions";
import { MenuToggle } from "@/Components/atoms/MenuToggle";
import { Navigation } from "@/Components/molecules/Navigation";
import "@/Components/css/sidebar_navigator_template.css"
const navbar = {
  open: { zIndex: 10, opacity :1 },
  closed: { zIndex: -1, opacity :0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
}
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
  
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav

      initial={false}
     variants={navbar}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="nav"
      style={{height: "100vh", position: isOpen ? "fixed" : "fixed", overflow:"hidden",zIndex:"100"}}
    >
      <motion.div className="divbackgrind" variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
    </motion.nav>
      <MenuToggle toggle={() => toggleOpen()} />
    </> 
  );
};
