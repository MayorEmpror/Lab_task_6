interface WobbleImageContentProps {
  SideText: string;
  children: any;
  customheight_1: string;
  customheight_2: string;
  image: string;
  id: string;
 direction : string;
}
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
// import Canvas from "@/Components/js/Canvas";
import { Canvas } from "@react-three/fiber";
import ThreeJSWobbleElement from "./ThreeJSWobbleElement";

const WobbleImageContent = (props: WobbleImageContentProps) => {

  return (
    <div className="bg-red-50/10 w-full lg:h-full flex border-b-2 border-x  border-[#7C91FA]/50">
 
      <div className={"h-full w-1/3 bg-gren-400    justify-center text-center items-center hidden " +`${props.direction==="left"?" xl:flex ": " hidden "}`}>
      <span className="rotate-90 text-md h-[5%] relative left-20"> {props.SideText} </span>
      </div>

      <div className="bg-yelow-500 h-full w-3/4">
        <div
          className={
            " w-full ml-5 xl:w-5/6 flex items-end bg-slte-500 " + props.customheight_2
          }
        >
       <div
            id={props.id}
            className="h-full  w-full ml-auto  items-end mt-auto"
          >
            <Canvas
              
              camera={{
                fov: 70,
                near: 0.001,
                far: 1000,
                position: [0, 0, 40],
              }}
            >
              {/* <OrbitControls /> */}
              <ThreeJSWobbleElement image={props.image}/>
            </Canvas>
          </div>
        </div>
        <div
          className={`w-full  bg-slte-500 lg:text-4xl   xl:text-5xl 2xl:text-6xl  text-center font-semibold pt-10 pr-5 ${props.customheight_1} `}
        >
          {props.children}
        </div>
      </div>

      <div className={"h-full w-1/3 bg-gren-400   justify-center text-center items-center hidden " + `${props.direction==="right"?" xl:flex ": " hidden "}`}>
      <span className="rotate-90 text-md h-[5%] relative right-20"> {props.SideText} </span>
      </div>
     

    </div>
  );
};

export default WobbleImageContent;
