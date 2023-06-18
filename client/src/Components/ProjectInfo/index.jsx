import { useState } from "react"
import ProjectTitle from "../ProjectTitle"
import { AiFillCheckCircle } from "react-icons/ai"
import { BsFillCircleFill } from "react-icons/bs"

const ProjectInfo = ({title, projectInfos}) => {
     const [active, setActive] = useState(false)

  return (
    <div className="md:w-[60%] w-full border-[1px] mx-auto border-[#55565b] rounded-[20px] bg-[#232a3b] p-[20px] ">
        <ProjectTitle title={title} />
        <div className="flex flex-wrap mt-[20px] items-center gap-[10px]">
            {projectInfos.map(info => (
                <div 
                    onClick={() => setActive(!active)}
                    className="flex bg-[#111b27] flex-row items-center gap-[10px] py-[10px] px-[15px] rounded-[10px] cursor-pointer">
                    { active ? <AiFillCheckCircle className="text-third md:text-[25px] text-[18px] " /> : <BsFillCircleFill className="text-third md:text-[25px] text-[18px] " /> }
                    <h3 className="text-third font-generalSansSemi font-semibold md:text-[16px] text-[14px]  "> {info.chain || info.status || info.funded  } </h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectInfo