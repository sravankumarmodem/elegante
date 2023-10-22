import useMediaQuery from "@/hooks/useMediaQury";
import "./scroll.css"

const Scroll = () => {
  const largeScreens = useMediaQuery("(min-width: 1024px)");
  return (
  <>
  { largeScreens &&
      <div className="w-[1921px] z-10 h-[54px] bg-E03C31 relative overflow-visable mt-[31px]">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        {/* <div className="animate-scrolling-text  text-white flex items-center justify-center">
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        </div> */}
    
        <div className="flex mt-[13px] mb-[14px] items-center   whitespace-nowrap justify-start gap-[105px] tracking-[2px] overflow-x-hiden   text-white text-[20px] h-[27px] ml-[42px] font-openSans  font-light">
            <p className="w-[354px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
        </div>
      </div>
    </div>

  }
  {/* ==========small================= */}
  { !largeScreens &&
      <div className="w-[1024px] z-10 h-[54px] bg-E03C31 relative overflow-visable mt-[31px]">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        {/* <div className="animate-scrolling-text  text-white flex items-center justify-center">
        <p className="text-wite font-light">
        GET 10% OFF YOUR FIRST ORDER
        </p>
        </div> */}
    
        <div className="flex mt-[13px] mb-[14px] items-center   whitespace-nowrap justify-start gap-[105px] tracking-[2px] overflow-x-hiden   text-white text-[20px] h-[27px] ml-[42px] font-openSans  font-light">
            <p className="w-[354px]">GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
            <p>GET 10% OFF YOUR FIRST ORDER</p>
        </div>
      </div>
    </div>
  }
  </>
  )
}

export default Scroll