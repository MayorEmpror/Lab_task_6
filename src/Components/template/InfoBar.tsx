
import { FlexCenterColumn } from "../atoms/FlexCenter";
import Button from "../molecules/Button";
const InfoBar = () => {
	return (
		<FlexCenterColumn>
		<section  id="getstarted" className="bg-white border border-[#7C91FA] w-full h-full hidden xl:block ">
			<div className="flex flex-row">
				<div className="w-1/2 p-10 text-lg">
				<span className="mb-5">
					Our fleet of state-of-the-art drones ensures that your
					favorite meals arrive hot, fresh, and right to your doorstep
				    in record time.
				</span>
				<br />
					With advanced technology and precise navigation, we deliver
					exceptional quality and speed with every order, making your
					experience seamless and enjoyable
				<Button>Get Started</Button>
				</div>
				<p className="border-r"></p>

			</div>

			<div className="flex flex-row border-t">
				<p className="w-1/2"></p>
				<p className="border-l w-1/2 text-lg p-10 bg-[#E8E6FF]">
					Download the app now or visit our website to place your first
					order. Let us take your dining experience to new heights!
				</p>
			</div>
		</section>
</FlexCenterColumn>
	);
};

export default InfoBar;
