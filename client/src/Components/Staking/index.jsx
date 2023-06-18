import StakingCard from "../StakingCard"

const Staking = () => {
  return (
    <>
        <h2 className="text-third text-center md:text-[2rem] text-[18px] font-bold m-[90px] "> Staking To Earn  </h2>
        <div className="border-[1px] border-[gray] rounded-[10px] flex flex-col gap-y-[20px] md:w-[60%] mx-auto p-[10px] ">
            <h2 className="text-center text-[#fff] font-semibold md:text-[18px] text-[16px] border-b-[1px] border-b-[gray] w-full p-[10px] "> ARBPAD Staking Statistics </h2>
            <aside className="flex flex-row w-full items-center justify-around border-b-[1px] border-b-[gray] py-[25px] px-[10px] ">
                <div className="flex flex-col items-center">
                    <p className="text-[gray] md:text-[18px] text-[16px]"> Current Staking </p>
                    <h3 className="text-[#fff] md:text-[18px] text-[16px] font-bold"> 0 </h3>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[gray] md:text-[18px] text-[16px]"> APY </p>
                    <h3 className="text-[#fff] md:text-[18px] text-[16px] font-bold"> 540.332 % </h3>
                </div>
            </aside>

        <div 
            className="w-[80%] h-[200px] mx-auto flex flex-row justify-around items-center">
            <StakingCard 
                title="My Staking" 
                btnTitle="Start Staking"
                extraStyles="bg-[#09548e] hover:opacity-[0.8]"
            />
            <StakingCard 
                title="My Rewards" 
                btnTitle="Claim Rewards"
                extraStyles="border-[1px] hover:opacity-[0.9] "
            />
        </div>
        </div>
    </>
  )
}

export default Staking