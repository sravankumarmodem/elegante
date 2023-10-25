import logo from "@/assets/ColouredELogo-01.png";
import user from "@/assets/user-128-512.png";
import bag from "@/assets/shopping-bag-4-240.png";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQury";
import { useState } from "react"; 

const Nabar = () => {
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");

  const [navBarIconShow, setNavBarIconShow] = useState<boolean>(false);
  const [barIconShow, setBarIconShow] = useState<boolean>(false);
  // console.table([{"tabletScreens": tabletScreens} , {"mobileScreens": mobileScreens}  ]);

  const handleBarClick = (i: string) => {
    i === "nav"
      ? setNavBarIconShow(!navBarIconShow)
      : setBarIconShow(!barIconShow);
  };
  return (
    <>
      {tabletScreens && mobileScreens && (
        <div className=" w-[1921px] flex flex-col">
          <nav className="bg-101820 h-[40px] ">
            <div className="flex mx-[140px] items-center justify-end    py-[9px] text-white gap-[64px] font-normal leading-[22px] tracking-[1.6px] text-base">
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                The View @ Elegante
              </p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                Eleganté Mall
              </p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">Salon</p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                Conference & Events
              </p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                Training
              </p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">Spa</p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">Studio</p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                Restaurant
              </p>
              <p className="hover:bg-white hover:text-101820 py-[9x]">Arcade</p>
            </div>
          </nav>
          <header className="">
            <div className="  bg-white flex flex-col item-center">
              <div className="   mx-[140px] flex item-center my-[37px] ">
                <div className="mr-[230px]">
                  <img src={logo} alt="elegante_logo" />
                </div>
                <div className="mr-[126px] w-[716px] my-[27.97px] relative">
                  <input
                    type="search"
                    className="w-full bg-1018200D rounded-full  h-[62px]"
                  />
                  <MagnifyingGlassIcon className="absolute right-[28px] top-[16px] h-[27px] w-[27px]" />
                </div>
                <div className="flex  items-center justify-end gap-[62px]">
                  <div className="flex items-center justify-center gap-[18.5px]">
                    <img src={user} alt="" className="h-[20px] w-[23px]" />
                    <p className="font-bold w-[122px] whitespace-nowrap text-101820 tracking-[1.6px] text-base">
                      MY ACCOUNT
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-[27px]">
                    <div className="relative">
                      <img src={bag} alt="" className="h-[23px] w-[22px] " />
                      <div className=" absolute bottom-0 left-2 top-3 rounded-full h-[26px] w-[26px] bg-FFAA4D flex items-center justify-center ">
                        12
                      </div>
                    </div>
                    <p className="font-bold  text-101820 tracking-[1.6px] text-base">
                      BASKET
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-A0A0A076 border-1   ">
                <div className="flex whitespace-nowrap items-center   my-[31px] font-bold  text-101820 tracking-[1.8px] text-lg  ">
                  <p className="ml-[253px] mr-[60px]">HAIR</p>
                  <p className="mr-[60px]">HAIR CARE</p>
                  <p className="mr-[59px]">SKIN & PERSONAL CARE</p>
                  <p className="mr-[60px]">MAKEUP</p>
                  <p className="mr-[59px]">FRAGRANCE</p>
                  <p className="mr-[58px]">TOOLS & ACCESSORIES</p>
                  <p className="mr-[60px]">FASHION & APPAREL</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
      {/* =============tables============ */}

      {!tabletScreens && mobileScreens && (
        <div className=" w-[768px] flex flex-col">
          <nav className="bg-101820 h-[90px] w-[768px]">
            <div className="flex text-white items-baseline	justify-center  gap-[15px]  mx-[20px]">
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                The View @ Elegante
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Eleganté Mall
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Salon
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Conference & Events
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Training
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">Spa</p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Studio
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Restaurant
              </p>
              <p className="hover:bg-white hover:text-101820 py-[19px]">
                Arcade
              </p>
            </div>
          </nav>
          <header className="  mx-[40px] ">
            <div className="  bg-white flex flex-col item-center">
              <div className="  flex flex-col item-center my-[37px] ">
                <div className=" flex items-center justify-between">
                  <img src={logo} alt="elegante_logo h-[64px] w-[188px]" />
                  <div className="flex  items-center justify-end gap-[62px]">
                    <div className="flex items-center justify-center gap-[18.5px]">
                      <img src={user} alt="" className="h-[20px] w-[23px]" />
                      <p className="font-bold w-[122px] whitespace-nowrap text-101820 tracking-[1.6px] text-base">
                        MY ACCOUNT
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-[27px]">
                      <div className="relative">
                        <img src={bag} alt="" className="h-[23px] w-[22px] " />
                        <div className=" absolute bottom-0 left-2 top-3 rounded-full h-[26px] w-[26px] bg-FFAA4D flex items-center justify-center ">
                          12
                        </div>
                      </div>
                      <p className="font-bold  text-101820 tracking-[1.6px] text-base">
                        BASKET
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mr-[126px] w-[716px] my-[27.97px] relative">
                  <input
                    type="search"
                    className="w-full bg-1018200D rounded-full  h-[62px]"
                  />
                  <MagnifyingGlassIcon className="absolute right-[28px] top-[16px] h-[27px] w-[27px]" />
                </div>
                {/* <div className="flex  items-center justify-end gap-[62px]">
                <div className="flex items-center justify-center gap-[18.5px]">
                  <img src={user} alt="" className="h-[20px] w-[23px]" />
                  <p className="font-bold w-[122px] whitespace-nowrap text-101820 tracking-[1.6px] text-base">
                    MY ACCOUNT
                  </p>
                </div>
                <div className="flex items-center justify-center gap-[27px]">
                  <div className="relative">
                    <img src={bag} alt="" className="h-[23px] w-[22px] " />
                    <div className=" absolute bottom-0 left-2 top-3 rounded-full h-[26px] w-[26px] bg-FFAA4D flex items-center justify-center ">
                      12
                    </div>
                  </div>
                  <p className="font-bold  text-101820 tracking-[1.6px] text-base">
                    BASKET
                  </p>
                </div>
              </div> */}
              </div>
              <div className="border-t border-A0A0A076 border-1   ">
                <div className="flex flex-col items-center  justify-between gap-[30px] my-[31px] font-bold  text-101820 tracking-[1.8px] text-lg  ">
                  <div className="flex items-center justify-between gap-[20px]">
                    <p>HAIR</p>
                    <p>HAIR CARE</p>
                    <p>SKIN & PERSONAL CARE</p>
                    <p>MAKEUP</p>
                  </div>
                  <div className="flex items-center justify-between gap-[20px]">
                    <p>FRAGRANCE</p>
                    <p>TOOLS & ACCESSORIES</p>
                    <p>FASHION & APPAREL</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
      {/* =============mobile============ */}

      {!tabletScreens && !mobileScreens && (
        <div className=" w-[393px] flex flex-col">
          <nav className="bg-101820 h-[40px]  ">
            <div className="flex  w-[375px] items-center justify-between  mx-auto   text-white font-normal tracking-[1.6px] text-base">
              <p className="hover:bg-white hover:text-101820 py-[9x]">
                {" "}
                Elegante Products
              </p>
              {/* <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center"> */}
              <Bars3CenterLeftIcon
                className="stroke-white h-[30px] w-[30px]"
                onClick={() => handleBarClick("nav")}
              />
              {/* </div> */}
            </div>
            {navBarIconShow && (
              <div className="flex justify-center overflow-visible">
                <div className="bg-101820 py-[10px] w-[1024px] flex items-start justify-center    h-[320px] overflow-y-visible ">
                  <div className="">
                    <div className="flex flex-col mx-[100px] items-start  justify-center text-white  gap-[10px] font-normal tracking-[1.6px] text-base">
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        The View @ Elegante
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Eleganté Mall
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Salon
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Conference & Events
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Training
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Spa
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Studio
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Restaurant
                      </p>
                      <p className=" hover:bg-white hover:text-101820 py-[9x]">
                        Arcade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>

          <header className="  mx-[30px] ">
            <div className="  bg-white flex flex-col item-center">
              <div className="  flex flex-col item-center my-[37px] ">
                <div className=" flex items-center justify-center">
                  <img src={logo} alt="elegante_logo h-[64px] w-[188px]" />
                </div>
                <div className="mr-[126px] w-[350px] my-[27.97px] relative">
                  <input
                    type="search"
                    className="w-full bg-1018200D rounded-full  h-[62px]"
                  />
                  <MagnifyingGlassIcon className="absolute right-[28px] top-[16px] h-[27px] w-[27px]" />
                </div>
                <div className="flex  items-center justify-end gap-[40px]">
                  <div className="flex items-center justify-center gap-[18.5px]">
                    <img src={user} alt="" className="h-[20px] w-[23px]" />
                    <p className="font-bold w-[122px] whitespace-nowrap text-101820 tracking-[1.6px] text-base">
                      MY ACCOUNT
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-[27px]">
                    <div className="relative">
                      <img src={bag} alt="" className="h-[23px] w-[22px] " />
                      <div className=" absolute bottom-0 left-2 top-3 rounded-full h-[26px] w-[26px] bg-FFAA4D flex items-center justify-center ">
                        12
                      </div>
                    </div>
                    <p className="font-bold  text-101820 tracking-[1.6px] text-base">
                      BASKET
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-A0A0A076 border-1   ">
                <div className="font-bold mt-[37px] flex items-center justify-between mx-auto whitespace-nowrap text-101820 tracking-[1.6px] text-base">
                  <p>Products</p>
                  <Bars3CenterLeftIcon
                    className="stroke-black h-[30px] w-[30px]"
                    onClick={() => handleBarClick("products")}
                  />
                </div>

                {barIconShow && (
                  <div className="flex  flex-col gap-[20px] py-[20px] items-center justify-center whitespace-nowrap font-bold ">
                    <p>HAIR</p>
                    <p>HAIR CARE</p>
                    <p>SKIN & PERSONAL CARE</p>
                    <p>MAKEUP</p>
                    <p>FRAGRANCE</p>
                    <p>TOOLS & ACCESSORIES</p>
                    <p>FASHION & APPAREL</p>
                  </div>
                )}
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Nabar;
