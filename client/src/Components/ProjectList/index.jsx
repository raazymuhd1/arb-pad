import { projectLives, projectComplete } from "../../constants"
import ProjectLive from "../ProjectLive"
import ProjectCompleted from "../ProjectCompleted"
import Title from "../Title"

const projectCompleted = ['PROJECT NAME', 'CHAIN', 'ENDS IN', 'TARGET RAISE', 'PROGRESS']

const ProjectList = () => {

  return (
    <div>
        <Title title="Live Projects" styles="justify-start translate-x-[40px] mt-[40px]" />
        <div className="flex flex-col gap-[40px] mt-[60px] ">
            {projectLives.map(project => (
                <ProjectLive key={project.id} project={project} />
            ))}
        </div>

        <h3 className="text-third font-generalSansBold font-bold md:text-[2rem] text-[1.5rem] translate-x-[40px] translate-y-[60px] uppercase"> Complete Projects ✅ </h3>
        <div className="w-[90%] mx-auto flex flex-row justify-between mt-[120px]">
            {projectCompleted.map((complete, idx) => (
                <h3 className="text-[#b6b6b6] font-generalSansBold font-bold text-[14px] md:text-[16px] " key={idx}> {complete} </h3>
            ))}
            
        </div>

        <div className="w-[90%] mx-auto flex flex-col mt-[20px] gap-[20px] justify-between">
            { projectComplete.map(project => (
                <ProjectCompleted key={project.id} project={project} />
            )) }
        </div>
    </div>
  )
}

export default ProjectList