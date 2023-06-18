import { tokenomics } from "../../constants"
import { circle } from "../../assets"
import Title from "../Title"

const Tokenomics = () => {
  return (
    <div className='w-full min-h-[600px] mt-[60px]'>
        <Title title="Tokenomics" styles="justify-center" />

        <div className='flex lg:flex-row flex-col items-center justify-between gap-[40px] w-[80%] min-h-[600px] mx-auto'>

            <div className="h-full flex mt-[50px] lg:flex-col flex-row flex-wrap items-center gap-[50px]">
                { tokenomics.projects.map(project => (
                    <div key={project.id} className="flex flex-row items-center gap-[20px] hover:scale-[1.1] transition-all duration-400 cursor-pointer">
                        <div className="border-[2px] border-[#303030] rounded-[30px] p-[20px] ">
                            <img src={project.img} alt="img" className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-contain" />
                        </div>
                        <div>
                            <p className="md:text-[18px] text-[16px] text-[#6e6767] font-generalSansMedium font-medium"> {project.title} </p>
                            <h3 className="text-primary font-generalSansBold font-bold md:text-[2rem] text-[1.5rem] "> {project.value} </h3>
                        </div>
                    </div>
                )) }
            </div>

            <div className="flex md:flex-row flex-col items-center gap-[35px]">
                <div className="h-full flex flex-col gap-[20px]">
                    { tokenomics.allocations.map(alloc => (
                        <div key={alloc.id} className="flex flex-row items-center gap-[20px] hover:scale-[1.1] transition-all duration-400 cursor-pointer">
                            <div className="">
                                <img src={alloc.img} alt="img" />
                            </div>
                            <div>
                                <p className="md:text-[18px] text-[16px] text-[#6e6767] font-generalSansMedium font-medium"> {alloc.title} </p>
                                <h3 className="text-third font-generalSansBold font-bold md:text-[1rem] text-[.8rem] "> {alloc.value} </h3>
                            </div>
                        </div>
                    )) }
                </div>
                <img src={circle} alt="" className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] object-contain " />          
            </div>
            
        </div>
    </div>
  )
}

export default Tokenomics