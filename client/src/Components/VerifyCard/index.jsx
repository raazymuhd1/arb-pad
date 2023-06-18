import React from 'react'

const VerifyCard = ({verify}) => {
  return (
    <div className='flex flex-1 items-center gap-[20px]'>
        <div className='p-[30px] rounded-[30px] border-[2px] border-[#303030]'>
            <img src={verify.img} alt="verify-img" className='object-contain w-[50px] h-[50px] ' />
        </div>
        <div className='w-[400px]'>
            <h3 className='text-third font-generalSansBold font-bold md:text-[25px] text-[18px]'> {verify.title} </h3>
            <p className='text-[#8c8181] font-generalSansMedium font-medium md:text-[16px] text-[14px]'> {verify.desc} </p>
        </div>
    </div>
  )
}

export default VerifyCard