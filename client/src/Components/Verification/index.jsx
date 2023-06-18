import React from 'react'
import { verifications } from "../../constants"
import VerifyCard from '../VerifyCard'

import { join } from '../../assets'

const Verification = () => {
  return (
    <div className='min-h-[700px] mt-[90px] w-full'>

        <div className='w-[80%] mx-auto'>

          <h3 className='text-third font-generalSansBold font-bold md:text-[3rem] text-[1.5rem] mb-[30px]'>Easy To Join IGO <br />
            With 3 Steps
        </h3>

        <div className='flex lg:flex-row mx-auto flex-col justify-between gap-[20px]'>
            <div className='flex flex-col gap-[30px]'>
                { verifications.map(verify => (
                    <VerifyCard key={verify.id} verify={verify} />
                )) }
            </div>

           <div className=''>
            <img src={join} alt="verify-img" className='lg:w-[450px] w-[350px] lg:h-[450px] h-[350px] ' />
           </div>
        </div>

         </div>
    </div>
  )
}

export default Verification