import { navlinks } from "../../../constants"
import { Link } from "react-router-dom"
import CustomButton from "../../CustomButton"
import { useState } from "react"

const Links = ({styles, linkStyles}) => {

  return (
    <div className={`${styles}`}>
        <ul className={`${linkStyles} items-center gap-[60px]`}>
            { navlinks.map(link => (
                <Link
                    key={link.id}
                    className="font-generalSansSemi text-[#fff] hover:text-primary transition-all duration-500 font-semibold md:text-[1rem] text-[16px] " to={`${link.url}`}>
                    {link.title}
                </Link>
            )) }
        </ul>
        <CustomButton styles="bg-secondary text-black hover:text-third p-[10px] transition-all duration-500 hover:bg-primary" title="Connect Wallet" />
      </div>
  )
}

export default Links