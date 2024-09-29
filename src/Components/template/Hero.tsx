import { FixedFlexCenter } from "../atoms/FlexCenter";
import Light from "../atoms/Light";
import Tag from "../atoms/Tag";
import Button from "../molecules/Button";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row w-full h-[1200px]  md:h-[1500px] xl:h-[700px] justify-center border-r border-l border-[#7C91FA80]"
    >
      <FixedFlexCenter>
        <Light width={350} height={350} color="#7C91FA" blurRadius={100} />
      </FixedFlexCenter>

      <div className="mt-32 w-full xl:w-1/2 h-5/6 flex flex-col  sm:justify-center xl:p-5 sm:ml-5  ">
        <div className="flex xl-block h-[10%] lg:h-[15%] xl:h-[20%] justify-center xl:justify-start">
          <Tag text="HASHIR" />{" "}
          <span className="hidden sm:block xl:hidden ml-10 text-5xl lg:text-7xl font-semibold leading-snug xl:mt-10">
            {" "}
            Hashir
          </span>
        </div>
        <span className="sm:hidden justify-center text-center xl:hidden mt-10 text-5xl lg:text-7xl font-semibold leading-snug xl:mt-10">
          {" "}
          Assignment
        </span>
        <div className="flex text-3xl md:text-5xl lg:text-7xl font-semibold leading-snug mt-10 justify-center xl:justify-start  xl:hidden">
          {" "}
          made simple
        </div>

        <h1 className="text-8xl font-semibold leading-snug mt-10  hidden xl:block">
          Lab Task
          <br />
           assignment
        </h1>
      </div>
      <div className="bg-blck w-full flex flex-col justify-center relative items-center md:top-[-100px] xl:hidden">
        <div className="text-center bg-vilet-500 py-10 w-full md:w-3/4 lg:w-1/2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium numquam modi neque, quae quasi iure in officia omnis
            consequuntur repellendus!
          </p>
        </div>
        <div className="bg-vilet-900 flex mx-auto col-span-1 text-xl my-auto">
       <a href="#RequestDemo"><Button>Contact us</Button></a>
        </div>
      </div>
      <div className="mt-10 flex flex-row mb-20 p-10 items-center ">
        {/* <video src={"/gif/video.mp4"} autoPlay={true} loop={true}></video> */}
        <video
          className="relative mt-5"
          autoPlay
          loop
          muted
        >
          <source className="" src={"/gif/video.mp4"} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
