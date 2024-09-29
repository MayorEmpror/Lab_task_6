"use client"
import Stats from "../atoms/StatisticsContent";
import User3DInterface from "@/Components/3js/User3DInterface";
import { useState } from "react";
const StatsTemp = () => {
	const [render,setrender] = useState<boolean>(false)
	setTimeout(()=>{
		setrender(true)
	},1000)
	return (

		<section id="status" className="border-t-0 border border-[#7C91FA] w-full h-[1000px] bg-white">
		<div className="items-center  md:grid grid-cols-4 h-full w-full">
			<div className="text-center bg-sate-500 w-full h-full col-span-1 p-10 pr-20 ">
				<div className=" w-full h-full grid grid-rows-5 gap-3">

					<Stats Score="20">
					Years of experience
					</Stats>
					<Stats Score="1200">
					Employees
					</Stats>
					<Stats Score="2690">
					Happy customers
					</Stats>
					<Stats Score="5380">
					orders completed 
					</Stats>
					<Stats Score="540">
					Drones in service
					</Stats>

				</div>
			</div>
			<div className=" w-full h-5/6 my-auto lg:flex col-span-2 hidden ">
			
				{render?<User3DInterface/>:null}
			</div>

			<div className="bg-slte-500 w-full h-full hidden md:block col-span-3 lg:col-span-1 text-7xl lg:text-5xl xl:text-7xl p-10 pl-3 pt-20 pr-10 mr-10 leading-snug">

<span className=" flex lg:mt-10 xl:mt-0  text-center justify-center lg:leading-normal"> Driven <br /> by <br /> cutting <br /> edge  <br /> drone <br /> tech.</span>

</div>
</div>
</section>
	);
};

export default StatsTemp;
