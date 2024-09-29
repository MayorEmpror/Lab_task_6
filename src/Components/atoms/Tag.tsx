interface TagProps {
  text: string;
}
import { SiDrone } from "react-icons/si";

const Tag = (props: TagProps) => {
  return (
    <div className="rounded-full bg-[#2D23AF] flex items-center text-white font-semibold w-fit text-3xl text-center lg:text-5xl tracking-widest p-6 px-12 gap-6">
      {props.text} 
      <SiDrone/>
    </div>
  );
};

export default Tag;
