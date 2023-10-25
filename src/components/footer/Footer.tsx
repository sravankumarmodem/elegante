import logo from "@/assets/ColouredELogo-01.png";
import twitterLogo from "@/assets/Group 238.svg";
import faceLogo from "@/assets/Group 239.svg";
import eclipLogo from "@/assets/instagram.png";
import cards from "@/assets/Group 235.png";
import copyright from "@/assets/© Eleganté 2022.svg";
import useMediaQuery from "@/hooks/useMediaQury";


const Footer = () => {
  
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  return (
    <>
      {tabletScreens && mobileScreens && (
        <div className="flex flex-col w-[1921px]">
          <div className="mt-[140px]  mx-[140px]  border-t border-A0A0A076 border-1 whitespace-nowrap ">
            <div className="flex items-start justify-between">
              <div className="flex flex-col w-[231px] h-[89px] item-start mt-[40px]">
                <img src={logo} alt="" className="w-[231px] h-[89px]" />
                <div className="flex gap-[10px] mt-[29.4px]">
                  <img src={twitterLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={faceLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={eclipLogo} alt="" className="h-[39px] w-[39px]" />
                </div>
                <img
                  src={cards}
                  alt=""
                  className="h-[29px] w-[149px] mt-[36px]"
                />
                <img
                  src={copyright}
                  alt=""
                  className="h-[19px] w-[107px] mt-[29.83px]"
                />

                <p className="font-normal text-[14px] mt-[7.51px]">
                  Site Designed & Developed by CDA
                </p>
              </div>
              <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">Shop</p>
                <div className="flex flex-col font-normal text-[18px] h-[24px] gap-[16px] mt-[25px]">
                  <p>Hair</p>
                  <p>Hair Care</p>
                  <p>Skin & personal Care</p>
                  <p>Makeup</p>
                  <p>Fragrance</p>
                  <p>Tools & accessories</p>
                  <p>Fashion & apparel</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">Useful Links</p>
                <div className="flex flex-col font-normal text-[18px] h-[24px] gap-[16px] mt-[25px]">
                  <p>Salon</p>
                  <p>Spa</p>
                  <p>Conference & events</p>
                  <p>Training</p>
                  <p>Studio</p>
                  <p>Restaurant</p>
                  <p>Arcade</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Customer Services
                </p>
                <div className="flex flex-col font-normal text-[18px] h-[24px] gap-[16px] mt-[25px]">
                  <p>My Account</p>
                  <p>Contact Us</p>
                  <p>FAQ’s</p>
                  <p>About Us</p>
                  <p>Returns</p>
                  <p>Legal Policies</p>
                  <p>News</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Subscribe to our newsletter
                </p>
                <form action="">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start mt-[21px] gap-[20px] justify-center">
                      <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        placeholder="Name"
                        className=" focus:outline-none focus:shadow-outline w-[446px] h-[56px]  placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className=" focus:outline-none focus:shadow-outline w-[446px] h-[56px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <div className="flex items-start justify-center gap-[18px]">
                        <input
                          type="checkbox"
                          id="exampleCheckbox"
                          className="h-[19px] w-[19px]"
                        />
                        <p className="h-[23px] font-normal text-[16px]">
                          I agree to all marketing communications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-[24px]">
                      <button
                        type="submit"
                        className="bg-101820 h-[54px] w-[164px] rounded-full "
                      >
                        <span className="flex item-center justify-center text-white font-bold text-[14px] h-[19px]">
                          SUBMIT
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[1920px] h-[15px] bg-101820 mt-[64px] overflow-visible"></div>
        </div>
      )}

      {/* ==========Tab========== */}
      {!tabletScreens && mobileScreens && (
        <div className="flex flex-col w-[768px]  relative h-[1024px]">
          <div className="mt-[40px] mb-[264px]   mx-[40px] h-auto border-t border-A0A0A076 border-1 whitespace-nowrap ">
           <div className="flex item-center flex-col">
            
             <div className="flex items-start  justify-between">
              <div className="flex flex-col w-[231px] h-[89px] item-start mt-[40px]">
                <img src={logo} alt="" className="w-[231px] h-[89px]" />
                <div className="flex gap-[10px] mt-[29.4px]">
                  <img src={twitterLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={faceLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={eclipLogo} alt="" className="h-[39px] w-[39px]" />
                </div>
                <img
                  src={cards}
                  alt=""
                  className="h-[29px] w-[149px] mt-[36px]"
                />
                <img
                  src={copyright}
                  alt=""
                  className="h-[19px] w-[107px] mt-[29.83px]"
                />

                <p className="font-normal text-[14px] mt-[7.51px]">
                  Site Designed & Developed by CDA
                </p>
              </div>
              <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[2px]">
                  Subscribe to our newsletter
                </p>
                <form action="">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start gap-[20px] justify-center">
                      <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        placeholder="Name"
                        className=" focus:outline-none focus:shadow-outline w-[346px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className=" focus:outline-none focus:shadow-outline w-[346px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <div className="flex items-start justify-center gap-[18px]">
                        <input
                          type="checkbox"
                          id="exampleCheckbox"
                          className="h-[19px] w-[19px]"
                        />
                        <p className="h-[23px] font-normal text-[16px]">
                          I agree to all marketing communications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-[24px]">
                      <button
                        type="submit"
                        className="bg-101820 h-[54px] w-[164px] rounded-full "
                      >
                        <span className="flex item-center justify-center text-white font-bold text-[14px] h-[19px]">
                          SUBMIT
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              
            </div>
            <div className="flex flex-col items-start justify-center  mt-[40px]">
                
                <div className="flex  font-normal flex-wrap text-[18px] h-[24px] gap-[16px] mt-[45px]">
                <p className="font-bold text-[18px] h-[24px]">Shop :</p>
                  <p>Hair</p>
                  <p>Hair Care</p>
                  <p>Skin & personal Care</p>
                  <p>Makeup</p>
                  <p>Fragrance</p>
                  <p>Tools & accessories</p>
                  <p>Fashion & apparel</p>
                </div>
                <div className="flex flex-wrap font-normal text-[18px] h-[24px] gap-[16px] mt-[65px]">
                <p className="font-bold text-[18px] h-[24px]">Useful Links  :</p>
                  <p>Salon</p>
                  <p>Spa</p>
                  <p>Conference & events</p>
                  <p>Training</p>
                  <p>Studio</p>
                  <p>Restaurant</p>
                  <p>Arcade</p>
                </div>

                <div className="flex flex-wrap font-normal text-[18px] h-[24px] gap-[16px] mt-[65px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Customer Services  :
                </p>
                  <p>My Account</p>
                  <p>Contact Us</p>
                  <p>FAQ’s</p>
                  <p>About Us</p>
                  <p>Returns</p>
                  <p>Legal Policies</p>
                  <p>News</p>
                </div>
              </div>

           </div>
           
            {/* </div> */}
          </div>
          <div className="w-[769px] h-[25px] z-100 bg-black  absolute top-[830px]"> 
          </div>
        </div>
      )}

      {/* ==========mobile========== */}
      {!tabletScreens && !mobileScreens && (
        <div className="flex flex-col w-[390px] ">
          <div className="mt-[80px]  mx-[20px]  border-t border-A0A0A076 border-1 whitespace-nowrap ">
           <div className="flex item-center flex-col">
           {/* <div className="flex items-center justify-center h-[auto]">
            <div className="flex flex-col item justify-between  ">
            
            <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Subscribe to our newsletter
                </p>
                <form action="">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start gap-[20px] justify-center">
                      <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        placeholder="Name"
                        className=" focus:outline-none focus:shadow-outline w-[446px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className=" focus:outline-none focus:shadow-outline w-[446px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <div className="flex items-start justify-center gap-[18px]">
                        <input
                          type="checkbox"
                          id="exampleCheckbox"
                          className="h-[19px] w-[19px]"
                        />
                        <p className="h-[23px] font-normal text-[16px]">
                          I agree to all marketing communications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-[24px]">
                      <button
                        type="submit"
                        className="bg-101820 h-[54px] w-[164px] rounded-full "
                      >
                        <span className="flex item-center justify-center text-white font-bold text-[14px] h-[19px]">
                          SUBMIT
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div> */}
            {/* <div className="flex "> */}

            <div className="flex flex-col items-start justify-center  mt-[40px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Subscribe to our newsletter
                </p>
                <form action="">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start gap-[20px] justify-center">
                      <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        placeholder="Name"
                        className=" focus:outline-none focus:shadow-outline w-[346px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className=" focus:outline-none focus:shadow-outline w-[346px] h-[56px] mt-[21px] placeholder-101820 border-2 border-12181F rounded-[28px] pl-[28px]"
                      />
                      <div className="flex items-start justify-center gap-[18px]">
                        <input
                          type="checkbox"
                          id="exampleCheckbox"
                          className="h-[19px] w-[19px]"
                        />
                        <p className="h-[23px] font-normal text-[16px]">
                          I agree to all marketing communications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-[24px]">
                      <button
                        type="submit"
                        className="bg-101820 h-[54px] w-[164px] rounded-full "
                      >
                        <span className="flex item-center justify-center text-white font-bold text-[14px] h-[19px]">
                          SUBMIT
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

             <div className="flex items-start justify-between">
              <div className="flex item-center justify-center">
                 <div className="flex flex-col w-[131px] h-[89px] item-start mt-[40px]">
               <div className="flex items-center justify-between">
               <img src={logo} alt="" className="w-[131px] h-[89px]" />
                <div className="flex ml-[140px] gap-[10px] mt-[29.4px]">
                  <img src={twitterLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={faceLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={eclipLogo} alt="" className="h-[19px] mt-[10px] w-[19px]" />
                </div>
               </div>
                
                <div className="flex ">
                  <div>
                     <img
                  src={copyright}
                  alt=""
                  className="h-[19px] w-[107px] mt-[29.83px]"
                />

                <p className="font-normal text-[14px] mt-[7.51px]">
                  Site Designed & Developed by CDA
                </p> 
                  </div>
                  <img
                  src={cards}
                  alt=""
                  className="h-[29px] w-[249px] ml-[-20px] mt-[16px]"
                />
                
                </div>
                
              </div>
              <div>
              {/* <div className="flex gap-[10px] mt-[29.4px]">
                  <img src={twitterLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={faceLogo} alt="" className="h-[39px] w-[39px]" />
                  <img src={eclipLogo} alt="" className="h-[39px] w-[39px]" />
                </div> */}
                
              </div>
              </div>
             
              
              
            </div>
             <div className="flex items-start mt-[80px]  flex-wrap justify-between">
             <div className="flex flex-col items-start justify-center w-[350px] ">
                <div className="flex flex-wrap font-normal text-[18px]  gap-[16px] mt-[25px]">
                <p className="font-bold text-[18px] h-[24px]">Shop</p>
                  <p>Hair</p>
                  <p>Hair Care</p>
                  <p>Skin & personal Care</p>
                  <p>Makeup</p>
                  <p>Fragrance</p>
                  <p>Tools & accessories</p>
                  <p>Fashion & apparel</p>
                </div>
                <div className="flex  font-normal flex-wrap text-[18px] h-[24px] gap-[16px]  mb-[45px] mt-[25px]">
                <p className="font-bold text-[18px] h-[24px]">Useful Links</p>
                  <p>Salon</p>
                  <p>Spa</p>
                  <p>Conference & events</p>
                  <p>Training</p>
                  <p>Studio</p>
                  <p>Restaurant</p>
                  <p>Arcade</p>
                </div>
                <div className="flex flex-wrap font-normal text-[18px] h-[24px] gap-[16px] mt-[65px] mb-[55px]">
                <p className="font-bold text-[18px] h-[24px]">
                  Customer Services
                </p>
                  <p>My Account</p>
                  <p>Contact Us</p>
                  <p>FAQ’s</p>
                  <p>About Us</p>
                  <p>Returns</p>
                  <p>Legal Policies</p>
                  <p>News</p>
                </div>
              </div>
             
              
            </div>
            <div className="flex items-center mt-[40px] justify-center h-[auto]">
            <div className="flex flex-col item justify-between  ">
            
            
            </div>
            </div>
           </div>
           
            {/* </div> */}
          </div>
          <div className="w-[1024px] h-[15px] bg-101820 mt-[64px] overflow-visible"></div>
        </div>
      )}
    </>
  );
};

export default Footer;
