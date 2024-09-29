
const Footer = () => {
  return (
    <section id="Inforamation" className=" bg-bue-700 border-t-0 border pt-32 border-[#7C91FA] w-full h-[600px] bg-slte-500 ">
    <div className="bg-blue-900 w-full h-full sm:h-3/4 md:h-full grid gird-cols-3 lg:grid-cols-5 lg:gap-x-3 ">
      <div className="hidden md:flex col-span-2 bg-blck w-full h-full  flex-col">
        <div className="text-5xl  lg:text-7xl mx-auto text-center text-white mt-32 tracking-wider xl:ml-40">
          Drone
        </div>
        <div className="text-white bg-slte-400  ml-40 text-xl items-center hidden xl:block mt-10">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore
        </div>
      </div>

      <div className="col-span-1 bg-blck/20 w-full h-full">
        <div className=" text-md lg:pr-10  sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-32">
          Contact 
        </div>
        <ul className="text-white ml-5 sm:ml-14 xl:ml-20 sm:mt-14 text-xs md:text-lg lg:text-xl">
          <li className="my-2 md:my-5"><a href="#">Home</a> </li>
          <li className="my-2 md:my-5"><a href="#">About Us</a> </li>
          <li className="my-2 md:my-5"><a href="#">Services</a> </li>
          <li className="my-2 md:my-5"><a href="#">FAQs</a> </li>
        </ul>
      </div>

      <div className="col-span-1 bg-blck/50 w-full h-full">
        <div className="text-md md:text-2xl lg:pr-10 lg:text-3xl text-white text-center mt-32">
          Company
        </div>
        <ul className="text-white sm:ml-14 xl:ml-20 ml-5 sm:mt-14 text-xs md:text-lg lg:text-xl">
          <li className="my-2 md:my-5"><a href="#">Website</a></li>
          <li className="my-2 md:my-5"><a href="#">Whatsapp</a></li>
          <li className="my-2 md:my-5"><a href="#">Advertisment</a></li>
          <li className="my-2 md:my-5"><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div className="col-span-1 bg-blck/30 w-full h-full">
        <div className="text-md md:text-2xl  lg:pr-10 lg:text-3xl text-white text-center mt-32">
          Office
        </div>
        <ul className="text-white sm:ml-14 xl:ml-20  sm:mt-14 ml-10 text-xs md:text-lg lg:text-xl">
          <li className="my-2 md:my-5"><a href="#">Address</a></li>
          <li className="my-2 md:my-5">
        <a href="#">  Phone : <br /> +(132)453-2345</a>
          </li>
        </ul>
      </div>
      <hr className="bg-white text-white col-span-5" />
      <div className="bg-blck w-full  col-span-4 text-white/50 sm:ml-10 ml-2">
        2024 Delivery.inc All rights reserved
      </div>
    </div>
  </section>
  );
};

export default Footer;