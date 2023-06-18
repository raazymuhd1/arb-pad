import React from 'react'

const ProjectCompleted = ({project}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center cursor-pointer hover:opacity-[0.6] transitin-all duration-500 bg-[#0a1223] p-[20px] md:overflow-hidden overflow-x-scroll'>

        <div className='flex items-center gap-[10px]'>
            <img src={project.img} alt='project-avatar' />
            <div>
                <h3 className='text-third font-generalSansBold font-bold md:text-[18px] text-[16px] '>{project.title}</h3>
                <p className='text-[#5a5e5d] font-generalSansSemi font-semibold md:text-[14px] text-[12px] '> PRICE = {project.price} </p>
            </div>
        </div>

        <div>
            <img src={project.chain} alt="chain" className='object-contain w-[40px] h-[40px]' />
        </div>

        <h4 className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[16px] '> {project.endsIn} </h4>
        <h4 className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[16px] '> {project.targetRaise} </h4>

        <div className='flex w-[150px] flex-row items-center gap-[10px]'>
             <div className='w-full bg-[#636363] mx-auto'>
                <div className='w-[50%] bg-primary rounded h-[15px] ' />
            </div>
            <p className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[16px]'> {project.progress} </p>
        </div>

    </div>
  )
}

export default ProjectCompleted