import Links from "./Links/index"
import { ImMenu } from "react-icons/im"
import { GrClose } from "react-icons/gr"
import { useState } from "react"

const Header = () => {
    const [showNav, setShowNav] = useState(false)
  
  return (
    <header className="w-full sticky z-[10] top-0 h-[100px] flex items-center bg-fourth">
        <nav className="w-[85%] mx-auto flex flex-row justify-between items-center">
            <h3 className="text-third md:text-[2rem] text-[1.7rem] font-generalSans font-bold"> ArbPad </h3>
            <Links styles="lg:flex hidden items-center" linkStyles="flex flex-row mr-[40px]" />

            <ImMenu onClick={() => setShowNav(true)} className="lg:hidden block text-third text-[2rem] font-generalSansBold font-bold cursor-pointer" />

          {showNav && (
             <div className="absolute p-[20px] h-screen top-[0] right-[0] w-[300px] bg-[#232a3b] ">
               <GrClose 
                onClick={() => setShowNav(false)}
                className="text-third text-[2rem] font-generalSansBold font-bold cursor-pointer" />
                <Links 
                  styles="lg:hidden flex flex-col-reverse items-center mt-[30px]" 
                  linkStyles="flex flex-col items-center mt-[40px]"  
                  />
             </div>
          ) }
        </nav>
    </header>
  )
}

export default Header