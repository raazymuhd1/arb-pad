import {features} from "../../constants"
import FeaturesCard from "../FeaturesCard"
import { motion } from "framer-motion"

const Features = () => {
  return (
    <div className='min-h-[500px] w-full'>
        <div className="w-[90%] mx-auto">
            <h3 className="md:text-[3rem] text-[2rem] font-generalSansBold font-bold text-center mb-[50px] text-third "> We Have Outstanding Technology <br />
                And Features 
            </h3>

            <motion.div initial={{opacity: 0, transitionDelay: 500, transitionDuration: 300 }} whileInView={{opacity: 1}} className="flex flex-wrap justify-center gap-[20px]">
                { features.map(feature => (
                    <FeaturesCard key={feature.id} feature={feature} />
                )) }
            </motion.div>
        </div>
    </div>
  )
}

export default Features