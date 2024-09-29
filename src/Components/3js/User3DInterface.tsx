"use client";
import {
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import DroneModel from "./GLTF/DroneModel";
import {
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useState } from "react";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"

const User3DInterface = () => {
  const [width,setWidth] =  useState<number>(1400)
  const [Height,setHeight] = useState<number>(900)
  const HDRI = useLoader(RGBELoader, "/HDRI/kiara_1_dawn_1k.hdr")
  useEffect(()=>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
   },[])
  return (
    <Suspense>
    <Canvas
      camera={{
        fov: 70,
        near: 0.001,
        far: 1000,
        position: [.15 , .15 , .15],
      }}
    >
      <EffectComposer>
         <Noise opacity={0.2}/>
      </EffectComposer>

      <PresentationControls
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 1, tension: 100 }}
        global
      >
        <Environment preset="dawn"/>

        <DroneModel scale={width<=1399|| Height<900?0.8:1} position={[0, -0.1, 0]}/>
      </PresentationControls>
    </Canvas>
    </Suspense>
  );
};

export default User3DInterface;
