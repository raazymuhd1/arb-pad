import { featuredProjects } from "../../constants"
import ProjectCard from "../ProjectCard"
import { motion } from "framer-motion"
import Title from "../Title"

const Featured = () => {
  return (
    <div className="w-full min-h-[500px] mb-[60px]">
       <Title title="Our Featured Projects" styles="justify-center" />

        <motion.div initial={{opacity: 0, transitionDelay: 500, transitionDuration: 300 }} whileInView={{opacity: 1}} className="flex md:flex-row flex-col items-center md:justify-center justify-start mt-[50px] gap-[40px] w-[80%] mx-auto ">
            {  featuredProjects.map(project => (
                <ProjectCard project={project} key={project.id} />
            )) }
        </motion.div>
    </div>
  )
}

export default Featured