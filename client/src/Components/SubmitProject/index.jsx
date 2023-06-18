import React from 'react'
import TextField from '../TextField'
import ProjectTitle from '../ProjectTitle'
import { projectInfos } from "../../constants"
import ProjectInfo from '../ProjectInfo'

import { BsTwitter, BsTelegram } from "react-icons/bs"

const SubmitProject = () => {
  return (
    <div className='w-full flex flex-col gap-y-[30px] h-full'>
       <form className='w-[80%] flex flex-col gap-y-[50px] mx-auto'>
          <div 
             className='md:w-[60%] w-[100%] min-h-[750px] mt-[50px] mx-auto border-[1px] border-[#55565b] rounded-[20px] bg-[#232a3b] p-[20px] '>
             <ProjectTitle title='Project Information' />
              <div className='flex flex-col gap-y-[30px] mt-[30px] '>
                <TextField 
                  type="text" 
                  textLabel="Project Name" 
                  placeholder="Enter the name of your project" />
                <TextField 
                  type="email" 
                  textLabel="Email Address" 
                  placeholder="Enter the email of your project" />
                <TextField 
                  type="text"
                  textLabel="Target Raise" 
                  placeholder="How much are you planning on raising on IGO ?" />
                <TextField 
                  type="text"
                  textLabel="Project website / Link to whipaper" placeholder="Enter the link" />
                <TextField 
                  type="text"
                  textArea
                  textLabel="Project Brief" 
                  placeholder="Tell us about your project" />
              </div>
          </div>

          <ProjectInfo 
            title="Blockchain/Platform" 
            projectInfos={projectInfos.chains} 
          />
          <ProjectInfo 
            title="Project Status" 
            projectInfos={projectInfos.statuses} 
          />
          <ProjectInfo 
            title="Have you already raised funds?" 
            projectInfos={projectInfos.funds} 
          />

          <div 
            className='md:w-[60%] w-[100%] min-h-[250px] mx-auto border-[1px] border-[#55565b] rounded-[20px] bg-[#232a3b] p-[20px] '>
            <ProjectTitle title="Socials media" />
            <div className='flex flex-col gap-y-[20px] mt-[20px]'>
              <TextField 
                type="text" 
                textLabel="Telegram" 
                placeholder="Enter telegram group link"
                Icon={BsTelegram}
                 />
              <TextField 
                type="text" 
                textLabel="Twitter" 
                placeholder="Enter twitter group link"
                Icon={BsTwitter}
                 />
            </div>
          </div>
       </form>
    </div>
  )
}

export default SubmitProject