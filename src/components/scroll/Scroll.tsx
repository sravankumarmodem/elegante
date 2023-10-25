import useMediaQuery from "@/hooks/useMediaQury";
import "./scroll.css"

const Scroll = () => {
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  return (
  <>
  { tabletScreens && mobileScreens &&
      <div className="w-[1921px] z-10 h-[54px] bg-E03C31 relative overflow-visable mt-[31px]">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <div className="animate-scrolling-text gap-[105px] text-white flex items-center justify-center">
        
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        
        
        </div>
    
        {/* <div className="flex mt-[13px] mb-[14px] items-center   whitespace-nowrap justify-start gap-[105px] tracking-[2px] overflow-x-hiden   text-white text-[20px] h-[27px] ml-[42px] font-openSans  font-light">
            <p className="w-[354px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
        </div> */}
      </div>
    </div>

  }
  {/* ==========ipad================= */}
  { !tabletScreens && mobileScreens &&
      <div className="w-[768px] z-10 h-[54px] bg-E03C31 relative overflow-visable mt-[31px]">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <div className="animate-scrolling-text gap-[50px] text-white flex items-center justify-center">
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        </div>
    
        {/* <div className="flex mt-[13px] mb-[14px] items-center   whitespace-nowrap justify-start  tracking-[2px] overflow-x-hiden   text-white text-[20px] h-[27px] ml-[42px] font-openSans  font-light">
            <p className="mr-[50px]" >GET 10% OFF YOUR FIRST ORDER</p>
            <p className="mr-[50px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p className="mr-[50px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p className="mr-[50px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p className="mr-[50px]">GET 10% OFF YOUR FIRST ORDER</p>
        </div> */}
      </div>
    </div>
  }
  { !tabletScreens && !mobileScreens &&
      <div className="w-[390px] z-10 h-[54px] bg-E03C31 relative overflow-visable mt-[31px]">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <div className="animate-scrolling-text gap-[30px] text-white flex items-center justify-center">
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        </div>
    
        {/* <div className="flex mt-[13px] mb-[14px] items-center overflow-hidden  whitespace-nowrap justify-start tracking-[2px] overflow-x-hiden   text-white text-[20px] h-[27px]  font-openSans  font-light">
            <p className="mr-[40px]" >GET 10% OFF YOUR FIRST ORDER</p>
            <p className="mr-[40px]" >GET 10% OFF YOUR FIRST ORDER</p> 
        </div> */}
      </div>
    </div>
  }
  </>
  )
}

export default Scroll