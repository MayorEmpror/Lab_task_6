"use client";
import Navigator from "@/Components/template/Navigator";
import Button from "../Components/molecules/Button";
import Hero from "@/Components/template/Hero";
import Reasons from "@/Components/template/Reasons";
import InfoBar from "@/Components/template/InfoBar";
import StatsTemp from "@/Components/template/StatisticsTemp";
import StepsContainer from "@/Components/template/Steps";
import FAQs from "@/Components/template/FAQs";
import Contact from "@/Components/template/Contact";
import { useEffect } from "react";
import ImageGallery from "@/Components/template/ImageGallery";
import Footer from "@/Components/template/Footer";
import SignupForDemo from "@/Components/molecules/SignUp";
// import Three from "@/Components/js/THREE"
export default function Home() {
  useEffect(() => {
    document
      .querySelector(".page_stairs")
      ?.scrollIntoView({ behavior: "instant" });
  }, []);
  return (
    <>
      <div className="overflow-x-clip">
        <Navigator />
        <main className="sm:p-10 h-screen py-0">
          <Hero />
          <Reasons />

          <ImageGallery />
          <StatsTemp />
          <StepsContainer />

          <section
            id="RequestDemo"
            className="border-t-0 border border-[#7C91FA]  w-full pb-10 sm:h-[1000px] md:h-[900px] xl:h-[750px] bg-[#f4f9ff] "
          >
            <div className="text-5xl font-semibold text-center ">
              {/* <div className="pt-10 w-full mt-10">Contact and Feedback Form</div> */}
              <div className="h-5/6 bg-sate-500 w-full  items-center flex mt-2 ">
                <SignupForDemo />
              </div>
            </div>
          </section>
          <section
           id="RequestDemo"
           className="hidden lg:block  border-t-0 border border-[#7C91FA]  w-full pb-10 sm:h-[1000px] md:h-[900px] xl:h-[750px] bg-[#f4f9ff] "
          >
                <div className="h-full w-full grid grid-cols-3 grid-row-1 gap-5">

                  <div className="w-full h-full bg-blue-400/50  relative mt-10">
                    <div style={{backgroundImage : "url('/Images/Drone.png')"}} className=" w-[90%] h-1/2 mx-auto mt-10  bg-cover bg-no-repeat transition-all duration-300 hover:invert ">
                    </div>
                   <div className="pl-5 w-full flex flex-row"> <Button>Buy Now</Button>
                   <div className="text-right w-1/2 text-3xl content-center"><h3>Drone</h3></div>
                   <Button>$60.00</Button>
                   </div>
                   <div className="w-5/6 mx-auto flex mt-10">Introducing the AeroSwift Drone – a cutting-edge, lightweight drone designed for seamless aerial photography and videography. With advanced stability features, 4K resolution, and an extended flight time,</div>
                  </div>
                  
                  <div className="w-full h-full bg-blue-400/50  relative mt-10 ">
                  <div style={{backgroundImage : "url('/Images/gear.jpg')"}} className=" w-[90%] h-1/2 mx-auto mt-10  bg-cover bg-no-repeat transition-all duration-300 hover:invert">
                  </div>
                  <div className="pl-5 w-full flex flex-row"> <Button>Buy Now</Button>
                   <div className="text-right w-1/2 text-3xl content-center"><h3>Gears</h3></div>
                   <Button>$100.0</Button>
                   </div>
                   <div className="w-5/6 mx-auto flex mt-10">
                   TitanX Gears – High-performance, precision-engineered gears built for durability and smooth operation. Designed to withstand heavy loads and extreme conditions, these gears ensure optimal power transmission in industrial machinery and automotive applications. Experience unmatched reliability and efficiency with TitanX.</div>
                  </div>
                  <div className="w-full h-full bg-blue-400/50  relative mt-10">
                  <div style={{backgroundImage : "url('/Images/laser.jpg')"}} className=" w-[90%] h-1/2 mx-auto mt-10  bg-cover bg-no-repeat transition-all duration-300 hover:invert">
                  </div>
                  <div className="pl-5 w-full flex flex-row"> <Button>Buy Now</Button>
                   <div className="text-right w-1/2 text-3xl content-center"><h3>Laser</h3></div>
                   <Button>$40.00</Button>
                   </div>
                   <div className="w-5/6 mx-auto flex mt-10">LumiTech Lasers – Advanced, high-precision lasers engineered for industrial cutting, medical applications, and scientific research. Offering superior accuracy, power control, and durability, LumiTech Lasers deliver consistent performance in even the most demanding environments. Achieve precision and excellence with every beam.</div>
                  </div>
                </div>
          </section>
          <section   id="RequestDemo"
           className="hidden lg:flex   border-t-0 border border-[#7C91FA]  w-full pb-10 sm:h-[1000px] md:h-[900px] xl:h-[750px] bg-[#f4f9ff] ">
              <div className=" w-[90%] h-1/2 my-auto mx-auto">

              <h2>HTML Table</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Grade</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>Sam</td>
    <td>17</td>
    <td>A</td>
    <td>Sam@gmail.com</td>
  </tr>
 <tr>
    <td>Anderson</td>
    <td>18</td>
    <td>C</td>
    <td>Andy@gmail.com</td>
  </tr>
  <tr>
    <td>Hashir</td>
    <td>20</td>
    <td>A-one</td>
    <td>Hashir@gmail.com</td>
  </tr>

</table>
              </div>
          </section>
          <FAQs />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
