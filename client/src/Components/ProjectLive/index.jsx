import React from 'react'

const ProjectLive = ({project}) => {
  return (
    <div className='w-[90%] justify-between min-h-[400px] bg-[#0a1223] rounded-[20px] p-[30px] mx-auto cursor-pointer border-[1px] hover:border-[#b2abab] transition-all duration-500 '>

        <div className='flex w-full md:flex-row flex-col'>
            <div>
                <img src={project.img} alt="project-img" />
            </div>

          <aside className='flex-1'>
            <div className='flex p-[20px] md:flex-row flex-col justify-between gap-y-[20px]'>
                    <div>
                        <h3 className='text-third font-generalSansBold font-bold md:text-[2rem] text-[1.5rem] '> { project.title } </h3>
                        <p className='text-[#b2abab] font-generalSansMedium font-medium md:text-[18px] text-[16px] '> PRICE = {project.price} </p>
                    </div>
                    <img src={project.chain} alt="chain" className=' w-[40px] h-[40px] object-contain'  />
            </div>

            <div >
                <div className='flex p-[20px] md:flex-row flex-col justify-between'>
                    <h3 className='text-third font-generalSansBold font-bold md:text-[20px] text-[18px] '> Total Raised: { project.raised } </h3>
                    <p className='text-third font-generalSansMedium font-medium md:text-[16px] text-[14px] '> 35% </p>
                </div>
                <div className='w-[90%] bg-fourth mx-auto'>
                    <div className='w-[50%] bg-primary rounded-[10px] h-[15px] ' />
                </div>
                <div className='flex p-[20px] md:flex-row flex-col justify-between'>
                    <span className='text-third font-generalSansMedium font-medium md:text-[16px] text-[14px]' > Sale: {project.sale} </span>
                    <span className='text-third font-generalSansMedium font-medium md:text-[16px] text-[14px]' > Airdrop: {project.airdrop} </span>
                </div>

                <div className='flex p-[20px] md:flex-row flex-col justify-between'>
                    <div>
                        <p className=' md:text-[16px] text-[14px] text-[gray] font-generalSansBold font-semibold'> Allocation </p>
                        <h4 className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[16px]'> {project.allocations} </h4>
                    </div>
                    <div>
                        <p className=' md:text-[16px] text-[14px] text-[gray] font-generalSansBold font-semibold'> Participants </p>
                        <h4 className='text-third font-generalSansSemi font-semibold md:text-[18px] text-[16px]'> {project.participants} </h4>
                    </div>
                </div>
            </div>

          </aside>
        </div>

    </div>
  )
}

export default ProjectLive