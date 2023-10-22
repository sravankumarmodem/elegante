import logo from "@/assets/ColouredELogo-01.png"
import user from "@/assets/user-128-512.png" 
import bag from "@/assets/bag.png" 
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"


const header = () => {
  return (
    

<div className='h-[298px] flex flex-col  mx-auto w-5/6'>
    <div className="flex justify-between w-full h-1/2">
        <div >
            <div  className="flex justify-start items-center">
            <img src={logo} alt="elegante logo"  />
            </div>
        </div>
        
        <div  className=" flex items-center ">
            <div className="pt-2 flex w-[716px]  items-center justify-end ">
                <input className="border-2 pl-5  bg-1018200D w-[716px] h-[64px]  rounded-full text-sm focus:outline-none"
                type="search" name="search"  />
                <MagnifyingGlassIcon className="absolute h-8 w-8 mr-4"/>
                
            </div>
        </div>
        <div   className=" flex items-center justify-end">
            <div className="flex justify-end item-center gap-16">
            <div className="flex items-center justify-between ">
                <img src={user} alt="userIcon" className="h-5 w-5 mr-2 "/>
                
                <p className="text-101820 font-bold ">MY ACCOUNT</p>
            </div>
            <div className="flex items-center justify-between ">
                <img src={bag} alt="userIcon" className="h-[26px] w-[26px] mr-2  relative"/>
               
                <p className="absolute rounded-full flex items-center justify-center font-sans-bold text-base h-6 w-6  mt-5 ml-2 bg-FFAA4D ">12</p>
                
                <p className="text-101820 font-bold">BASKET</p>
            </div>
            
            
            </div>
        </div>
            
    
    </div>

    <div className='border-t border-gray-300 my-4 h-1/2 w-full flex justify-center items-center'>
        <div className="flex m-5 text-101820 font-openSans-bold justify-between font-bold items-center w-5/6 m-auto">
        <p>HAIR</p>
        <p>HAIR CARE</p>
        <p>SKIN & PERSONAL CARE</p>
        <p>MAKEUP</p>
        <p>FRAGRANCE</p>
        <p>TOOLS & ACCESSORIES</p>
        <p>FASHION & APPAREL</p>
        </div>
       

    </div>
</div>
  )
}

export default header