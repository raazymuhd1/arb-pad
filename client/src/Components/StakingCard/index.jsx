import CustomButton from "../CustomButton"

const StakingCard = ({title, btnTitle, extraStyles}) => {
  return (
    <div className="h-full w-full flex flex-col justify-around items-center">
        <h3 className="text-left text-third md:text-[18px] text-[16px] mb-[30px] font-semibold "> {title} </h3>
        <div>
            {/* icon */}
            <h3 className="text-third md:text-[1.4rem] text-[18px] font-bold"> 0 ARBPAD </h3>
        </div>
        <button className={`w-[80%] mx-auto whitespace-nowrap text-third ${extraStyles} rounded-[10px] py-[5px] transition-all duration-400 px-[10px] font-semibold `}> 
            {btnTitle}
        </button>
    </div>
  )
}

export default StakingCard