import Title from "../Title"
import { partners } from "../../constants"

const Partners = () => {
  return (
    <div className='w-[90%] min-h-[600px] mt-[60px] mx-auto'>
       <Title title="Our Partners" styles="justify-center" />

        <div className="flex flex-wrap justify-center gap-[20px] mt-[50px] items-center">
            { partners.map(partner => (
                <div key={partner.id} className="border-[2px] md:w-[200px] w-[100px] border-[#303030] rounded-[10px]">
                    <img src={partner.img} alt='partner' className="object-contain opacity-[0.6] cursor-pointer hover:opacity-[1] " />
                </div>
            )) }
        </div>
    </div>
  )
}

export default Partners