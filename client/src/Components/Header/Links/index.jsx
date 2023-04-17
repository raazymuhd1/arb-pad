import { navlinks } from "../../../constants"
import { Link } from "react-router-dom"
import CustomButton from "../../CustomButton"

const Links = () => {
  return (
    <div className="flex items-center">
        <ul className="flex items-center gap-[40px] mr-[40px] ">
            { navlinks.map(link => (
                <Link className="font-generalSansSemi text-[#fff] hover:text-primary transition-all duration-500 font-semibold md:text-[1rem] text-[16px] " to={`${link.url}`}>{link.title}</Link>
            )) }
        </ul>
        <CustomButton styles="bg-secondary text-third p-[15px] transition-all duration-500 hover:bg-primary" title="Connect Wallet" />
      </div>
  )
}

export default Links