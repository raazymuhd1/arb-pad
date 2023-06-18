import {useEffect} from 'react'
import { useAnimate, useInView, stagger } from "framer-motion"

const TeamsCard = ({team}) => {
  //  const [scope, animate] = useAnimate()
  //  const isInView = useInView(scope)

  //   useEffect(() => {
  //    if (isInView) {
  //      animate(scope.current, { x: [100, 0] }, { duration: 0.5, delay: stagger(0.2, { from: "center" }), ease: "easeInOut" })
  //      animate("div", { x: [100, 0] }, { duration: 0.5, delay: stagger(0.2, { from: "center" }), ease: "easeInOut" } )
  //    }
  // }, [isInView])


  return (
    <div  className='w-[250px] flex flex-col items-center justify-between min-h-[250px] bg-[#191825] rounded-[30px] p-[10px] '>
        <div className='border-[2px] border-[#303030] rounded-[30px] '>
            <img src={team.avatar} className='md:w-[140px] md:h-[140px] w-[100px] h-[100px] object-contain' />
        </div>
        <div>
            <h3 className='text-third font-generalSansBold font-bold md:text-[1.3rem] text-[1.1rem] '> {team.name} </h3>
            <p className='text-[#6e6767]  font-generalSansMedium font-medium md:text-[16px] text-[14px]'> {team.position} </p>
            <div>
                {/* socials */}
            </div>
        </div>
    </div>
  )
}

export default TeamsCard