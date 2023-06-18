import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"

const Title = ({title, styles}) => {
  return (
    <div className={`flex items-center ${styles} gap-[10px]`}>
       <MdKeyboardDoubleArrowRight className="text-primary text-[18px] md:text-[2rem] " />
       <h3 className={`md:text-[3rem] text-[2rem] font-generalSansBold font-bold text-third`}> { title } </h3>
       <MdKeyboardDoubleArrowLeft className="text-primary text-[18px] md:text-[2rem] " />
     </div>
  )
}

export default Title