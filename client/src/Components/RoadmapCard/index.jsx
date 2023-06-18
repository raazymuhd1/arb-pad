import React from 'react'

const RoadmapCard = ({roadmaps, quartal}) => {
  return (
    <>
       <h3 className='text-third md:text-[25px] text-[18px] font-generalSansSemi font-semibold '> Q{quartal} </h3>
        <div className='w-[300px] border-[2px] border-[#fff] rounded-tr-[20px] rounded-bl-[20px] ' >
            { roadmaps.map(roadmap => (
                <div className='w-full p-[15px] cursor-pointer'>
                    <h2 className='text-third font-generalSansSemi font-semibold md:text-[16px] text-[14px] '> <span className='md:text-[20px] font-generalSansBold font-bold '> - </span> {roadmap.title} </h2>
            </div>
            )) }
        </div>

    </>
  )
}

export default RoadmapCard