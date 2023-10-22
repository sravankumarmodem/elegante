

type Props = {
  buttonText:string;
}

const ShopNowButton = ({buttonText}: Props) => {
  return (
    <button className="h-[54px]  w-[206px] rounded-[40px] border-101820 border-2"><span className="font-bold  text-101820 tracking-[1.6px] text-base">{buttonText}</span></button>
  )
}

export default ShopNowButton