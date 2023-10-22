import img6 from "@/assets/Copy of Copy of 6.png";
import useMediaQuery from "@/hooks/useMediaQury";

const Shop = () => {
  const largeScreens = useMediaQuery("(min-width: 1024px)");
  

  return (
    <>
      {largeScreens && (
        <div className="w-[1921px] h-[765px]   m-l-[140px] ">
          <div className="relative">
          <div className="flex  items-center ml-[140px]">
            <div className="w-[718px] h-[765px]">
              <div className=" w-full my-[179px]   flex flex-col item-center justify-center ">
                <div className="mr-[170px]  h-[336px] w-[408px] flex-wrap   flex items-center justify-center  ">
                  <p className=" font-openSans text-[100px] tracking-[0px] leading-[100px] font-extrabold">
                    Shop New Arrivals
                  </p>
                </div>
                <button className="h-[54px] mt-[18px] w-[170px] rounded-[40px] bg-E03C31 ">
                  <span className="font-bold  text-white tracking-[1.6px] text-base">
                    {" "}
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute w-[1202px] right-0 top-[-159px] overflow-hidden ">
              <div className="">

              <img src={img6} alt="" className="h-[924px]   " />
              </div>
            </div>
          </div>
        </div>
        </div>
        
      )}

      {/* ===========small======= */}
      {!largeScreens && (
        <div className=" mx-[140px]  w-[1024px]">
          <div className="flex ">
          <div className="flex flex-col   ">
            <div className="w-[718px] h-[765px]  ">
              <div className="   mt-[179px] mx-[140px]   ">
                <div className="mr-[170px]  h-[336px] w-[408px] flex flex-col items-center justify-center  ">
                  <p className=" font-openSans text-[100px] tracking-[0px] leading-[100px] font-extrabold">
                    Shop New Arrivals
                  </p>
                </div>
                <button className="h-[54px] mt-[18px] w-[170px] rounded-[40px] bg-E03C31 overflow-hidden">
                  <span className="font-bold  text-white tracking-[1.6px] text-base">
                    {" "}
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <img src={img6} alt="" className="h-[924px] w-[1220px] " />
            </div>
          </div>
        </div>
        </div>
        
      )}
    </>
  );
};

export default Shop;
