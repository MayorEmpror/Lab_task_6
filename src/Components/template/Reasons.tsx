import Card from "@/Components/molecules/Card";
import Button from "../molecules/Button";
import { FlexCenterColumn } from "../atoms/FlexCenter";
const Reasons = () => {
	return (

		<section id="reasons" className="border-t-0 border border-[#7C91FA] w-full pb-10 sm:h-[2000px] md:h-[1300px] xl:h-[750px] bg-[#f4f9ff] ">
		<div className=" xl:grid grid-cols-4 grid-rows-2 gap- h-full  w-full">

			<div className=" col-span-2 row-span-2 bg-slte-500 w-full xl:h-full p-2 sm:p-10">
				<div className=" text-3xl  xl:text-5xl font-semibold mt-10 xl:mt-24 relative flex text-center sm:text-start justify-center xl:justify-start">
					About me and my hobbies
				</div>
				<div className="text-lg tracking-wide mt-20 mb-10 leading-7 ">
					<p className="flex mx-auto xl:block text-center xl:text-start  xl:w-full">
					As a passionate developer, I enjoy building intuitive, 
					efficient, and scalable solutions. With a strong foundation 
					in web technologies and a knack for creative problem-solving,
					I thrive in environments where innovation meets functionality
				
					experiences or optimizing performance, I’m always eager to push the
					 boundaries of what’s possible in tech.
 					Let me know if you would like to adjust it further!
						
					</p>
				</div>
				<div className="xl:hidden"><FlexCenterColumn>	<Button>Learn more</Button></FlexCenterColumn></div>
				<div className="hidden xl:block">
					<a href="#WEBGL_SECTION"><Button> Learn more</Button></a>
					</div>
			</div>

			<div className="col-span-2 md:grid grid-cols-2 bg-blck ">
			<div className=" col-span-1 row-span-2 bg-slte-500 px-2 sm:px-10 xl:px-0 xl:mr-2  ">
			<Card heading={"Reading"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a minima voluptas dolor.
			</Card>
			<Card heading={"Sports"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a minima voluptas dolor.
			</Card>
			</div>
			<div className=" col-span-1 row-span-2 bg-slte-500 xl:ml-2 xl:mr-4 px-2 sm:px-10 xl:px-0">
			<Card heading={"Coding"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a minima voluptas dolor.
			</Card>
			<Card heading={"Writing"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a minima voluptas dolor.
			</Card>
			</div>
			</div>

		</div>
</section>
	);
};

export default Reasons;
