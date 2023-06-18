import {useEffect} from "react"
import Title from "../Title"
import { teams } from "../../constants"
import TeamsCard from "../TeamsCard"
import { motion } from "framer-motion"

const Teams = () => {

  return (
     <div className='w-[90%] mt-[60px] mx-auto min-h-[600px]'>
         <Title title="Meet The Teams" />

         <motion.div 
            drag
            dragTransition={{
              min: 10,
              max: 100,
              bounceDamping: 8
            }}
            dragElastic={0.2}  
            initial={{opacity: 0}} 
            transition={{ type: "spring", bounce: 0.2  }} 
            whileInView={{opacity: 1}} 
            className="grid md:grid-cols-4 grid-cols-1 mt-[50px] items-center gap-[20px] ">
            { teams.map(team => (
                <TeamsCard key={team.id} team={team} />
            )) }
         </motion.div>
    </div>
  )
}

export default Teams