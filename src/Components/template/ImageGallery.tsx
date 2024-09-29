import WobbleImageDesc from "@/Components/molecules/WobbleImageDesc";
import LeftWobbleImageContent from "@/Components/molecules/LeftWobbleImageContent";
import { useEffect, useRef } from "react"
const ImageGallery = () => {

  return (
    <> 
    <section
    id="WEBGL_SECTION_Mobile"
     className="section bg-ble-300/10 border-b-2 border-x  lg:hidden border-[#7C91FA]/50 w-full h-[3000px] grid grid-rows-6  ">
     
      <div className="w-full h-full px-5 bg-back sm:px-14 pt-10 xs:items-center xs:justify-center flex flex-col  row-span-1" >
        <div className=" w-[95%] sm:w-5/6 h-5/6 bg-cover bg-no-repeat mx-auto flex mr-5" style={{backgroundImage : "url('/Images/EcoFriendly.png')"}}></div>
        <div className=" text-xl sm:text-5xl  text-center font-bold mt-10"> ECO FREINDLY</div>
      </div>
   
      <div className="w-full h-1/2 leading-relaxed pt-14 text-sm sm:text-xl  px-14 text-start  flex flex-col  row-span-1" >
      We’re committed to reducing our carbon footprint. Our electric drones offer a green alternative to traditional delivery methods, helping protect the environment while delivering your meals.Our fleet of electric drones is designed with the environment in mind. Unlike traditional delivery vehicles, our drones produce zero emissions, reducing air pollution and contributing to cleaner, healthier communities. 
      </div>

      <div className="w-full h-full px-5 bg-back sm:px-14 pt-10 xs:items-center xs:justify-center flex flex-col  row-span-1" >
        <div className=" w-[95%] sm:w-5/6 h-5/6 bg-cover bg-no-repeat mx-auto flex mr-5" style={{backgroundImage : "url('/Images/pack.jpg')"}}></div>
        <div className=" text-xl sm:text-5xl  text-center font-bold mt-10">  PREPARE AND FLY</div>
      </div>


      <div className="w-full h-1/2 leading-relaxed pt-14 text-sm sm:text-xl  px-14 text-start  flex flex-col  row-span-1" >
      Once your order is confirmed, our partner restaurants spring into action, meticulously preparing your meal with the utmost care. Each dish is crafted to perfection, ensuring that it meets our high standards for freshness and quality.After your meal is ready, it’s carefully packaged to preserve its temperature and presentation. Our restaurant partners use high-quality. 
      </div>

      <div className="w-full h-full px-5 bg-back sm:px-14 pt-10 xs:items-center xs:justify-center flex flex-col  row-span-1" >
        <div className=" w-[95%] sm:w-5/6 h-5/6 bg-cover bg-no-repeat mx-auto flex mr-5" style={{backgroundImage : "url('/Images/Drone.png')"}}></div>
        <div className=" text-xl xm:text-5xl  text-center font-bold mt-10">  PREPARE AND FLY</div>
      </div>

      <div className="w-full h-1/2 leading-relaxed pt-14 text-sm sm:text-xl  px-14 text-start  flex flex-col  row-span-1" >
      Our fleet of electric drones is designed with the environment in mind. Unlike traditional delivery vehicles, our drones produce zero emissions, reducing air pollution and contributing to cleaner, healthier communities.Our advanced routing algorithms optimize flight paths, minimizing energy consumption and ensuring the most efficient delivery routes.         
      </div>

    
    </section>
    <section className="overflow-x-clip section bg-ble-300/10 border-b-2 border-x hidden lg:block border-[#7C91FA]/50 w-full h-[3000px]" id="WEBGL_SECTION">

    {/* <THREE/> */}
      {/* <main>
        <div data-scroll className="w-full">
            <div className="page w-full">
               
                <div className="grid grid-cols-5 w-full gap-5 p-5">
                    <a href="https://www.livescience.com/octopuses-punch-fish.html" className="item item_v">
                        <div className="item__image">
                            <img src="img/1.jpg" id="img" alt="" style={{opacity: "0"}}/>
                            <div className="item__meta">December 23, 2020</div>
                        </div>

                        <h2 className="item__title">Octopus punches fish in the head (just because it can)</h2>
                        <p>Octopuses sometimes partner with fish to hunt, but the partnership comes with risks (for the fish, that is).</p>
                    </a>
                    <a href="https://www.livescience.com/balloon-like-comb-jelly-discovered-puerto-rico.html" className="item item_h">
                        <div className="item__image">
                            <img src="img/2.jpg" alt=""/>
                            <div className="item__meta">December 01, 2020</div>
                        </div>

                        <h2 className="item__title">Newfound marine blob looks like party balloon with two strings, scientists say</h2>
                        <p>This is the first species NOAA scientists have ever discovered from video footage alone.</p>
                    </a>
                    <a href="https://www.livescience.com/largest-recorded-swarm-of-deep-sea-fish.html" className="item item_h">
                        <div className="item__image">
                            <img src="img/4.jpg" alt=""/>
                            <div className="item__meta">November 26, 2020</div>
                        </div>

                        <h2 className="item__title">Swarm of eels breaks record</h2>
                        <p>Before we start mining for precious metals in the darkness of the deep sea, we might try switching on the light first and observing our surroundings.</p>
                    </a>
                    <a href="https://www.livescience.com/mantis-shrimp-property-wars.html" className="item item_v">
                        <div className="item__image">
                            <img src="img/3.jpg" alt=""/>
                            <div className="item__meta">November 03, 2020</div>
                        </div>

                        <h2 className="item__title">Mantis shrimp punch down</h2>
                        <p>Home-stealers fought the hardest for smaller-than-ideal dens.</p>
                    </a>

                    <a href="https://www.livescience.com/megalodon-big-for-a-shark.html" className="item item_v">
                        <div className="item__image">
                            <img src="img/1.jpg" alt=""/>
                            <div className="item__meta">October 05, 2020</div>
                        </div>

                        <h2 className="item__title">Megalodons hugeness</h2>
                        <p>Even among its extinct relatives, Megalodon was unequalled in length and mass.</p>
                    </a>
                    <a href="https://www.livescience.com/tiny-sunfish-larva.html" className="item item_h">
                        <div className="item__image">
                            <img src="img/2.jpg" alt=""/>
                            <div className="item__meta">July 27, 2020</div>
                        </div>

                        <h2 className="item__title">Adorable sunfish</h2>
                        <p>Sunfish in the Molidae family are among the biggest fish in the world.</p>
                    </a>
                    <a href="https://www.livescience.com/supergiant-isopod-newfound-species.html" className="item item_h">
                        <div className="item__image">
                            <img src="img/4.jpg" alt=""/>
                            <div className="item__meta">August 18, 2020</div>
                        </div>

                        <h2 className="item__title">Massive Darth Vader sea bug</h2>
                        <p>The newly described species is one of the biggest isopods known to science.</p>
                    </a>
                    <a href="https://www.livescience.com/worlds-deepest-octopus.html" className="item item_v">
                        <div className="item__image">
                            <img src="img/3.jpg" alt=""/>
                            <div className="item__meta">June 01, 2020</div>
                        </div>

                        <h2 className="item__title">Scientists capture the worlds deepest octopus</h2>
                        <p>The octopus was found miles beneath the ocean surface.</p>
                    </a>
                </div>
                
            </div>

        </div>
    </main>    */}
       
    <div className=" bg-slae-500/50 w-[94.25vw] h-full grid bg-ble-500 bg-back   grid-cols-2 grid-rows-3">
     
     <WobbleImageDesc direction="left" image="/Images/EcoFriendly.png" id="ImageBackdrop1"  SideText="our Efficient Operations" customheight_1="h-1/4" customheight_2="h-3/4">
    
     ECO FREINDLY
     </WobbleImageDesc>
    <LeftWobbleImageContent>
    We’re committed to reducing our carbon footprint. Our electric drones offer a green alternative to traditional delivery methods, helping protect the environment while delivering your meals.Our fleet of electric drones is designed with the environment in mind. Unlike traditional delivery vehicles, our drones produce zero emissions, reducing air pollution and contributing to cleaner, healthier communities.
   
    </LeftWobbleImageContent>

     
    <LeftWobbleImageContent>
    Once your order is confirmed, our partner restaurants spring into action, meticulously preparing your meal with the utmost care. Each dish is crafted to perfection, ensuring that it meets our high standards for freshness and quality.After your meal is ready, it’s carefully packaged to preserve its temperature and presentation. Our restaurant partners use high-quality.
    </LeftWobbleImageContent>
   <WobbleImageDesc direction="right" image="/Images/pack.jpg" id="ImageBackdrop2" SideText="Commited to exellent service" customheight_1="h-1/3" customheight_2="h-2/3">
    PREPARE AND FLY
     </WobbleImageDesc>

     <WobbleImageDesc direction="left" image="/Images/Drone.png" id="ImageBackdrop3"   SideText="Clean. Fast. Green." customheight_1="h-1/3" customheight_2="h-2/3">
     Electric Drones
     </WobbleImageDesc>
     <LeftWobbleImageContent>    
     Our fleet of electric drones is designed with the environment in mind. Unlike traditional delivery vehicles, our drones produce zero emissions, reducing air pollution and contributing to cleaner, healthier communities.Our advanced routing algorithms optimize flight paths, minimizing energy consumption and ensuring the most efficient delivery routes.         
     </LeftWobbleImageContent>

    
     
    </div>
    </section>
    </>
  );
};

export default ImageGallery;