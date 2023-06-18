import {Fragment} from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='min-h-[520px] bg-[#303030] md:w-[500px] w-[300px] overflow-hidden hover:scale-[1.05] transition-all duration-500 cursor-pointer'>
        <div className='w-full h-[300px] rounded-[20px]'>
            <img src={project.banner} alt="banner" className='w-full h-full object-cover rounded-[10px]' />
        </div>
        <div className='flex flex-row items-center w-[90%] p-[10px] gap-[20px] border-b-[1px] border-b-[#262323] '>
            <img src={project.avatar} alt="avatar" className='md:w-[100px] md:h-[100px] object-contain w-[60px] h-[60px]' />
            <div>
                <h3 className='text-third font-generalSansBold font-bold md:text-[2rem] text-[18px] '>{project.title}</h3>
                <p className='text-third font-generalSansMedium font-medium md:text-[1.1rem] text-[16px]'> {project.desc} </p>
            </div>
        </div>

        <div className='mt-[20px] w-[90%] mx-auto'>

            <div className='flex flex-col gap-y-[10px]'> 
                <div className='flex items-center justify-between'>
                    <h3 className='text-third font-generalSansBold font-bold md:text-[1.3rem] text-[14px]'> Total Raised </h3>
                    <h4 className='text-primary font-generalSansBold font-bold md:text-[1.3rem] text-[14px]'> { project.totalRaised } </h4>
                </div>
                <div className='w-full rounded-[10px] bg-fourth'>
                    <div className={`h-[9px] w-[50%] bg-primary rounded-[10px]`} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard