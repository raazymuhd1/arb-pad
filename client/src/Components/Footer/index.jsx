import React from 'react'
import { footers } from '../../constants'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-full mt-[50px] md:h-[350px] h-[450px] '>

        <div className='w-[90%] h-full flex flex-col justify-between p-[20px] mx-auto'>

            <div className='flex w-full md:flex-row flex-col p-[20px] gap-y-[30px] justify-between'>
                <div>
                    <h3 className='text-third md:text-[3rem] text-[1.5rem] font-generalSansBold font-bold'> ARBPad </h3>
                    <p className='text-[#8c9494] font-generalSansSemi font-semibold text-[12px] md:text-[14px] '> A one-stop destination for web3 gaming. </p>
                </div>

                <div>
                    { footers.contact.map(contact => (
                        <div className='flex flex-col'>
                            <h4 className='text-[#8c9494] font-generalSansSemi font-semibold text-[10px] md:text-[12px] '>{ contact.title }</h4>
                            <p className='text-third md:text-[16px] text-[14px] font-bold font-generalSansBold mb-[10px]'>{ contact.value }</p>
                        </div>
                    )) }
                </div>
            </div>

            <div className='h-[1px] bg-[#303030] w-full' />

            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
               <h3 className='text-[14px] text-[#6a717d] font-generalSansSemi font-semibold'> Copyright © 2023.All Rights Reserved </h3>
               <div className='flex  items-center justify-between gap-[20px]'>
                   {footers.socials.map((social, idx) => (
                     <Link to="#" key={idx} className='border-[1px] border-[#303030] p-[10px] rounded-[50%] md:mt-[0] mt-[20px] '>
                      <social.Icon className="text-third text-[18px] cursor-pointer hover:scale-[1.2] transition-all duration-500" />
                     </Link>
                   ))}
               </div>
            </div>

        </div>
    </div>
  )
}

export default Footer