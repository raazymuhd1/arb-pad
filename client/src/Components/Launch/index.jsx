import { launchIcon } from "../../assets"
import CustomButton from "../CustomButton"
import { useNavigate, useLocation } from "react-router-dom"

const Launch = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    console.log(pathname)

  return (
    <div className={`w-full h-[350px] ${pathname !== "/" ? "mt-[150px]" : "mt-[20px]" } `}>
        <div className='w-[90%] h-full p-[20px] rounded-[20px] launch flex mx-auto flex-col md:flex-row items-center justify-between'>
            <div className="h-[70%] flex md:flex-col flex-row md:items-start items-center justify-between gap-[20px]">
                <div>
                    <h3 className="text-third font-generalSansBold font-bold md:text-[3rem] text-[1.2rem] ">Launch On ARBVerse</h3>
                    <p className="text-[#bdc4c7] font-generalSansBold font-bold md:text-[1rem] text-[0.7rem]" >Full support in project incubation</p>
                </div>
                <CustomButton
                 clickHandler={() => navigate("/project-submission")}
                 title="Apply Now" 
                 styles="bg-primary py-[10px] px-[10px] md:py-[15px] md:px-[20px] md:w-[200px] w-[150px] h-[50px] hover:opacity-[0.8] transition-all duration-500" />
            </div>
            <img src={launchIcon} alt="launch" className=" md:w-[500px] w-[300px] md:h-[500px] h-[300px] object-contain" />
        </div>
    </div>
  )
}

export default Launch