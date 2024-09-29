
import Button from "@/Components/molecules/Button";
import { FlexCenterColumn } from "@/Components/atoms/FlexCenter";
const Contact = () => {
  return (
    <section id="contact" className=" bg-[#E9E6FF] border-t-0 border-x  border-[#7C91FA] w-full h-[500px] flex ">
    <div className=" w-full border-y px-10 border-[#7C91FA] h-3/4 my-auto text-5xl ">
      <div className="mt-32 bg-blck items-center w-full text-2xl md:text-6xl text-center font-semibold mb-10">
        {" "}
        Let us deliver to your destination
      </div>
      <FlexCenterColumn>
        <Button>
       
     <a href="#Inforamation" className="text-2xl">Contact us</a>
         
        </Button>
      </FlexCenterColumn>
    </div>
  </section>
  );
};

export default Contact;