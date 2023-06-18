import React from 'react'
import Title from "../Title"
import RoadmapCard from '../RoadmapCard'
import { roadmaps } from "../../constants"

const Roadmap = () => {
  return (
    <div className='p-[40px]'>
        <Title title="Roadmaps" />

      <aside className='flex md:flex-row flex-col items-center md:gap-0 gap-[20px] mt-[60px] '>

        <RoadmapCard roadmaps={roadmaps.q1} quartal={1} />
        <div className='md:h-[1px] h-[200px] bg-[#fff] md:w-[200px] w-[1px] ' />

        <RoadmapCard roadmaps={roadmaps.q2} quartal={2} />
        <div className='md:h-[1px] h-[200px] bg-[#fff] md:w-[200px] w-[1px] ' />

        <RoadmapCard roadmaps={roadmaps.q3} quartal={3} />

      </aside>
    </div>
  )
}

export default Roadmap