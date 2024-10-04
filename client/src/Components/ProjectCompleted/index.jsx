import React from 'react'

const ProjectCompleted = ({project}) => {
  return (
    <div className='w-full flex flex-row justify-between items-center cursor-pointer hover:opacity-[0.6] transitin-all duration-500 bg-[#0a1223] p-[20px] md:overflow-hidden overflow-x-scroll gap-[20px]'>

        <div className='flex md:flex-row flex-col items-center gap-[10px]'>
            <img src={project.img} alt='project-avatar' className={`w-[30px] h-[30px] md:w-[100px] md:h-[100px]`} />
            <div>
                <h3 className='text-third font-generalSansBold font-bold md:text-[18px] text-[12px] whitespace-nowrap'>{project.title}</h3>
                <p className='text-[#5a5e5d] font-generalSansSemi font-medium md:text-[14px] text-[8px] '> PRICE = {project.price} </p>
            </div>
        </div>

        <div>
            <img src={project.chain} alt="chain" className='object-contain md:w-[40px] w-[30px] h-[40px]' />
        </div>

        <h4 className='text-third font-generalSansSemi font-normal md:text-[18px] text-[12px] '> {project.endsIn} </h4>
        <h4 className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[12px] '> {project.targetRaise} </h4>

        <div className='flex md:w-[150px] w-[100px] flex-row items-center gap-[10px]'>
             <div className='w-full bg-[#636363] mx-auto'>
                <div className='w-[50%] bg-primary rounded h-[15px] ' />
            </div>
            <p className='text-third font-generalSansSemi font-semibold lg:text-[18px] md:text-[14px] text-[12px]'> {project.progress} </p>
        </div>

    </div>
  )
}

export default ProjectCompleted