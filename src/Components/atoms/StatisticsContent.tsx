"use client"

/**
 * Used to display the count-up statistics on the main page. Used in StatisticsTemp.tsx
 */
interface StatsProps {
	Score : string,
	children : any,
}
import { useState } from 'react';
import CountUp from 'react-countup';
const Stats = (props:StatsProps) => {
	const [counterShouldRender, setCounterRender] = useState<boolean>(true)
	return (
		<div className="bg-blck h-full w-full row-span-1 ml-10">

			<div className=" text-5xl lg:text-3xl xl:text-5xl text-blue-900 font-semibold my-2 ">
				+{counterShouldRender ? <CountUp start={0} end={parseInt(props.Score ?? "0") ?? 0} onEnd={() => setCounterRender(false)}/> : props.Score}
				
				</div>
			<div className="mt-2 text-md xl:text-xl font-thin">{props.children}</div>
		</div>
	);
};

export default Stats;
