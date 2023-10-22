
import starFilled from "@/assets/star-filled.png"
import starHalf from "@/assets/star-half-filled.png"
import starOutLine from "@/assets/star-outline.png"

type Props = {
    rating:number
}

const StarRating = ({rating}: Props) => { 
  return (
    <div className="flex items-center mt-[8px]">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            { (index < rating && !(index === rating - 0.5) )  &&  
            <img src={starFilled}  className="h-[14px] w-[15px]" />
            }
            {index === rating - 0.5 && (
              
                <img src={starHalf} className="h-[14px] w-[15px]" />
              
            )}
            { (!(index < rating) && !(index === rating - 0.5) )  &&  
            <img src={starOutLine}  className="h-[14px] w-[15px]"/>
            }
          </div>
        ))}
      </div>
    </div>
    
    
  );
};

export default StarRating; 