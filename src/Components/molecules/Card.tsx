interface CardProps {
	heading : string,
	children : any,

}
const Card = (props: CardProps) => {

	return (
		<div className="bg-[#CAC6FC] h-1/3  mt-20 p-10">

		<div className=" text-2xl xl:text-4xl font-semibold w-full content-start  ">
			{props.heading}
		</div>
		<div className="text-md xl:text-xl font-light mt-5 w-full content-start  ">

		{props.children}
		</div>

	</div>
	);
};

export default Card;
