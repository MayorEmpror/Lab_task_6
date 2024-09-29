

import { AccordionDemo } from "@/Components/molecules/Accordion";
const FAQs = () => {
  return (
    <section id="FAQs" className=" bg-ble-300/10 border-t-0 border-x px-10 border-[#7C91FA] w-full xl:h-[600px] xl:grid grid-cols-3 bg-white">
          <div className="Line-Height  flex xl:block pl-5 text-center xl:text-start justify-center  xl:justify-start w-5/6 h-full col-span-1 py-20 text-xl  sm:text-5xl font-semibold leading-loose">
            Frequently <br /> asked <br /> questions
          </div>

          <div className="w-full sm:w-1/2 flex mx-auto pb-5 xl:block xl:w-full h-full bg-k col-span-2 xl:mt-28">
            <AccordionDemo />
          </div>
        </section>
  );
};

export default FAQs;