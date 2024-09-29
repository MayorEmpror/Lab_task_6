import NavigationItem from "@/Components/atoms/NavigationMenuCustom";
import { useState } from "react";
import { motion } from "framer-motion"
import { Sidebar } from "./NavigatorSidebar";
import { SiDrone } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/Components/ui/navigation-menu";
import { FlexCenterRow } from "../atoms/FlexCenter";

const Navigator = () => {

  return (
    <>
    <div className="flex border-b border-[#7C91FA80]  bg-blck   flex-row p-2 fixed w-screen bg-white z-50 ">
      <div className=" mt-2 bg-ble-600 flex flex-row md:ml-10 sm:mx-auto xl:ml-16 xl:flex xl:py-5">
      <h1 className="ml-10 p-2 sm:p-0 sm:pr-10 text-xl text-blue-900 font-extrabold flex gap-2 items-center "> <SiDrone/> Hashir</h1>
     <div className="hidden md:block">
     <NavigationMenu className=" ml-[5vw] xl:ml-[20vw]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-blue-900 hover:text-blue-800 ml-[5vw] xl:ml-10">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent >
              <a href="#home"> 
            <NavigationItem heading="Home">
                Leading the way in drone delivery innovation.
              </NavigationItem>
              </a>
            {/* <a href="#getstarted">
              <NavigationItem heading="Get Started">
            
                Get ultra-fast delivery—drones at your doorstep!
              </NavigationItem>
              </a> */}
              <a href="#reasons"> 
              <NavigationItem heading="Why drone delivery?">
                Faster, safer, and better—choose drone delivery!
              </NavigationItem>
              </a>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-blue-900 hover:text-blue-800 xl:ml-10">
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <a href="#status">
              <NavigationItem heading="Our Status">
                Redefining delivery with drone solutions
              </NavigationItem>
              </a>
            <a href="#contact">
              <NavigationItem heading="Customer Service">
                Your preferences drive our fast and reliable service
              </NavigationItem>
              </a>

             <a href="#Inforamation">
             <NavigationItem heading="Inforamation">
                Delivering with minimal impact
              </NavigationItem>
             </a>

            </NavigationMenuContent>


          </NavigationMenuItem>

          <NavigationMenuItem>

            <NavigationMenuTrigger className="text-blue-900 hover:text-blue-800  xl:ml-10">
              Services
            </NavigationMenuTrigger>

            <NavigationMenuContent>
 
              <a href="#steps">
              <NavigationItem heading="How to do it">
                Get your orders faster with our high-speed drones
              </NavigationItem>
              </a>

               <a href="#WEBGL_SECTION">  
              <NavigationItem heading="Portfolio">
                Safe and secure delivery right at your doorstep
              </NavigationItem>
              </a>

              <a href="#RequestDemo">  
              <NavigationItem heading="Request Demo">
                Monitor your delivery from takeoff to touchdown from our demo
              </NavigationItem>
              </a>

            </NavigationMenuContent>
          </NavigationMenuItem>

       <a href="#FAQs">
       <NavigationMenuItem>
            <p className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group text-blue-900 hover:text-blue-800  xl:ml-10">
              FAQs
            </p>
          </NavigationMenuItem>
       </a>
        </NavigationMenuList>
      </NavigationMenu>
     </div>
      </div>
    </div>

    <div className="block md:hidden">
    <Sidebar/>
    </div>


    </>
  );
};

export default Navigator;
