import React from 'react'
import CustomButton from '../CustomButton'

import {heroIcon} from "../../assets"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='hero bg-fourth min-h-[650px] flex items-center overflow-hidden w-full bg-cover bg-no-repeat'>

        <div className='w-[90%] h-full flex md:flex-row flex-col items-center mx-auto'>

          <div>
               <div className='flex flex-col items-start gap-[20px]'>
                    <h3 className='font-generalSansBold font-bold md:text-[4.5rem] text-third text-[2rem] ' > Enter the gateway <br /> 
                        of Blockchain <br />
                        Gaming
                    </h3>
                    <p className='font-generalSansBold font-bold md:text-[1.3rem] text-third text-[1rem] '>Visually and Spatially connecting games in seamless metaverse <br />
                        experience
                    </p>
                </div>
                <div className='flex mt-[50px] flex-row gap-[30px]'>
                    <CustomButton title="Presale Is Live" styles="bg-primary w-[max-content] text-black p-[15px]" />
                    <CustomButton title="Audit" styles="bg-primary w-[100px] text-black p-[15px]" />
                </div>
          </div>

          <div className=''>
            <div className='hero-icon absolute top-[150px] right-[0] '>
                <img src={heroIcon} className='hidden md:block ' alt='hero-icon' />
            </div>
          </div>
             
        </div>
        
    </motion.div>
  )
}

export default Hero