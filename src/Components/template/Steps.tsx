import Steps from "@/Components/atoms/Steps";
const StepsContainer = () => {
  return (
    <>
    <section id="Steps" className="lg:hidden bg-[#f4f9ff] border-t-0 border px-10 border-[#7C91FA] w-full h-[1500px] md:h-[1000px] xl:h-[1000px] grid grid-cols-1 grid-rows-4  md:grid-cols-2 md:grid-rows-2">
    <div className="cols-span-1 w-full h-full bg-back"> 
       <div className="bg-ble-200 h-[25.5vw] w-[30vw] mt-20  mx-auto flex col-span-1 ">
            <div
            style={{backgroundImage : "url('/Images/Download.png')"}}
             className="bg-slte-200 bg-contain bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="w-full h-full ">
                <Steps
                    Number="1."
                    Content={
                        " available on IOS and Android Lorem ipsum dolor sit amet."
                    }
                    ContentHeading={"Download the app  "}
                />
            </div>

    </div>
    
    <div className="cols-span-1 w-full h-full bg-back"> 
       <div className="bg-ble-200 h-[25.5vw] w-[30vw] mt-20  mx-auto flex col-span-1 ">
            <div
              style={{backgroundImage : "url('/Images/order.jpg')"}}
             className="bg-slte-200 bg-contain bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="w-full h-full ">
             <Steps
                    Number="2."
                    Content={" choose what you want and check out "}
                    ContentHeading={"Place your order"}
                />
            </div>

    </div>

    <div className="cols-span-1 w-full h-full bg-back"> 
       <div className="bg-ble-200 h-[25.5vw] w-[30vw] mt-20  mx-auto flex col-span-1 ">
            <div
            style={{backgroundImage : "url('/Images/pack.jpg')"}}
             className="bg-slte-200 bg-contain bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="w-full h-full ">
        <Steps
                    Number="3."
                    Content={
                        " The store will securely pack your order   Lorem ipsum dolor sit amet."
                    }
                    ContentHeading={"Pack  "}
                />
            </div>

    </div>

    <div className="cols-span-1 w-full h-full bg-back"> 
       <div className="bg-ble-200 h-[25.5vw] w-[30vw] mt-20  mx-auto flex col-span-1 ">
            <div
              style={{backgroundImage : "url('/Images/fly.jpg')"}}
             className="bg-slte-200 bg-contain bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="w-full h-full ">
              <Steps
                    Number="4."
                    Content={"We will get your package ready for flying"}
                    ContentHeading={"Fly and Deliver"}
                />
            </div>

    </div>
    </section>

    <section id="steps" className="hidden lg:grid bg-[#f4f9ff] border-t-0 border px-10 border-[#7C91FA] w-full h-[600px] xl:h-[1000px]  grid-rows-3 py-10">
    <div className="bg-blck h-full w-full grid grid-cols-3">
        <div className="bg-ble-300 h-full w-full col-span-1 ">
            <div className="w-1/2">
                <Steps
                    Number="1."
                    Content={
                        " available on IOS and Android Lorem ipsum dolor sit amet."
                    }
                    ContentHeading={"Download the app  "}
                />
            </div>
        </div>

        <div className="bg-ble-400 h-full w-full col-span-1 ">
            <div className="flex items-center mx-auto w-1/2">
                <Steps
                    Number="3."
                    Content={
                        " The store will securely pack your order   Lorem ipsum dolor sit amet."
                    }
                    ContentHeading={"Pack  "}
                />
            </div>
        </div>

        <div className="bg-ble-500 h-full w-full col-span-1 flex flex-row">
            <div className="w-1/2"></div>
            <div className="w-1/2 mr-10">
                <Steps
                    Number="5."
                    Content={
                        " Once the drone arrives at the delivery address it will safely drop the package"
                    }
                    ContentHeading={"Deliver"}
                />
            </div>
        </div>
    </div>

    <div className="bg-blck/50 h-5/6 w-full grid grid-cols-5">
        <div className="bg-ble-200 h-full w-full col-span-1 ">
            <div
            style={{backgroundImage : "url('/Images/Download.png')"}}
             className="bg-slate-200 bg-contain bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div
         className="bg-ble-200 h-full w-full col-span-1 ">
            <div
            style={{backgroundImage : "url('/Images/order.jpg')"}}
             className="bg-slate-100 bg-cover bg-center bg-no-repeat rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="bg-ble-200 h-full w-full col-span-1 ">

            <div
            style={{backgroundImage : "url('/Images/pack.jpg')"}}
             className="bg-slate-100  bg-cover bg-center bg-no-repeat rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div
        
         className="bg-ble-200 h-full w-full col-span-1 ">
            <div 
            style={{backgroundImage : "url('/Images/fly.jpg')"}}
            className="bg-slate-100  bg-cover bg-center bg-no-repeat rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
        <div className="bg-ble-200 h-full w-full col-span-1 ">
            <div 
                style={{backgroundImage : "url('/Images/delivery.jpg')"}}
            className="bg-slate-100 bg-cover bg-center bg-no-repeat  rounded-full w-3/4 h-5/6 mx-auto mu-auto flex mt-5"></div>
        </div>
    </div>

    <div className="bg-blck h-full w-full grid grid-cols-2 gap-20 xl:gap-5 px-32 ">
        <div className="bg-ble-300 h-full w-full col-span-1 ">
            <div className="flex items-center mx-auto w-1/3">
                <Steps
                    Number="2."
                    Content={" choose what you want and check out "}
                    ContentHeading={"Place your order"}
                />
            </div>
        </div>
        <div className="bg-ble-300 h-full w-full col-span-1 ">
            <div className="flex items-center mx-auto w-1/3">
                <Steps
                    Number="4."
                    Content={"We will get your package ready for flying "}
                    ContentHeading={"Fly"}
                />
            </div>
        </div>
    </div>
</section>
</>
  );
};

export default StepsContainer;