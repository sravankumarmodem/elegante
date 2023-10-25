import img1 from "@/assets/Copy of Copy of 5.png"; 
import ShopNowButton from "../shared/ShopNowButton";
import useMediaQuery from "@/hooks/useMediaQury";

type Props = {};

function Fragrance({}: Props) {
  
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  return (
   <>
   { tabletScreens && mobileScreens &&
     <div className=" w-[1921px] ml-[140px] mt-[436px] h-[838px] overflow-hidden ">
      
     <div className="flex items-center justify-center  ">
       <div className="h-[391px] w-[592px] mr-[270px] overflow-hidden ">
         <div className="flex flex-col items-start gap-[29px] justify-center relative">
           <p className="underline underline-offset-[16px]  absolute top-[-30px] left-0 decoration-wavy decoration-FFAA4D w-[52.8px] ">skjdska</p>
           <p className="font-extrabold text-[45px] mt-[10px] ">Lorem ipsum dolor sit amet, consetetur</p>
           <p className="  ">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore et dolore magna
             aliquyam erat, sed diam voluptua. At vero eos et accusam et
             justo duo dolores et ea rebum. Stet clita kasd gubergren.
           </p>
           <ShopNowButton buttonText="FIND OUT MORE"/>
         </div>
       </div>

       <div className=" w-[917px] relative  ">
         <div className="overflow-hidden">

         <div className="w-[1010px]  h-[838px] bg-101820 rounded-[20px] opacity-5">
         </div>
           
         </div>
         <div className="absolute top-[140px] left-[-180px]">
             <img src={img1} className="h-[563px] w-[958px]" />
           </div>
       </div>
    
   </div>
 </div>
   }

   {/* =========tab ============ */}

   { !tabletScreens  && mobileScreens &&
     <div className= " w-[768] ml-[40px] mt-[436px]  overflow-hidden ">
      
     <div className="flex flex-col items-center justify-center  ">
       <div className="h-[391px] w-[592px] mr-[70px]  ">
         <div className="flex flex-col items-start gap-[29px] justify-center relative">
           <p className="underline underline-offset-[16px]  absolute top-[-30px] left-0 decoration-wavy decoration-FFAA4D w-[52.8px] ">skjdska</p>
           <p className="font-extrabold text-[45px] mt-[10px] ">Lorem ipsum dolor sit amet, consetetur</p>
           <p className="  ">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore et dolore magna
             aliquyam erat, sed diam voluptua. At vero eos et accusam et
             justo duo dolores et ea rebum. Stet clita kasd gubergren.
           </p>
           <ShopNowButton buttonText="FIND OUT MORE"/>
         </div>
       </div>

       <div className=" w-[717px] relative  " >
         <div className="overflow-hidden ml-[140px]">

         <div className="w-[910px]  h-[738px] bg-101820 rounded-[20px] opacity-5">
         </div>
           
         </div>
         <div className="absolute top-[140px] left-[0px]">
             <img src={img1} className="h-[463px] w-[550px]" />
           </div>
       </div>
    
   </div>
 </div>
   }
   {/* =========small ============ */}

   { !tabletScreens  && !mobileScreens &&
     <div className= " w-[390px]   mt-[236px]  overflow-hidden ">
      
     <div className="flex flex-col items-center justify-center  ">
       <div className=" w-[360px]    ">
         <div className="flex flex-col items-start gap-[10px] justify-strech relative">
           <p className="underline underline-offset-[16px]  absolute top-[-30px] left-0 decoration-wavy decoration-FFAA4D w-[52.8px] ">skjdska</p>
           <p className="font-extrabold text-[24px] mt-[10px] ">Lorem ipsum dolor sit amet, consetetur</p>
           <p className=" text-[18px] ">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore et dolore magna
             aliquyam erat, sed diam voluptua. At vero eos et accusam et
             justo duo dolores et ea rebum. Stet clita kasd gubergren.
           </p>
           <ShopNowButton buttonText="FIND OUT MORE"/>
         </div>
       </div>

       <div className="w-[375px] relative">
         <div className="overflow-hidden ml-[80px]">

         <div className="w-[410px]  h-[600px] bg-101820 rounded-[20px] opacity-5">
         </div>
           
         </div>
         <div className="absolute top-[120px] left-[0px]">
             <img src={img1} className="h-[363px] w-[300px]" />
           </div>
       </div>
    
   </div>
 </div>
   }
   </>
  );
}

export default Fragrance;
