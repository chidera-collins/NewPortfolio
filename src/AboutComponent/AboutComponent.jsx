import React from 'react'
import javaPic from './Tech/javascript.png'
import reactPic from './Tech/react.png'
import tailwindPic from './Tech/tailwindd.png'
import typePic from './Tech/typPic.png'
import {motion} from "motion/react"


function AboutComponent() {
  return (
    <div>
        <div id='About' className='min-h-[100px] w-full  bg-black text-white flex flex-col justify-center items-center'>
            <h2 className='text-[24px] font-bold capitalize'>skills</h2>
            <div className='w-[80%] lg:w-[70%]  h-[150px] grid grid-cols-4 lg:grid-cols-5 gap-4  items-center  '>
              <img src="" alt="" className='hidden lg:block'/>
              <motion.img 
                  initial={{ y: 30 , opacity:0}}
                animate={{ y: 0, opacity:1 }}
                transition={{delay:1, duration:2}}
              src={javaPic} alt="javascript" height={70} width={70}/>
              <motion.img
              initial={{ y: 30 , opacity:0}}
                animate={{ y: 0, opacity:1 }}
                transition={{delay:1, duration:2}} 
              src={tailwindPic} alt="tailwind" height={90} width={100}/>
              <motion.img
              initial={{ y: 30 , opacity:0}}
                animate={{ y: 0, opacity:1 }}
                transition={{delay:1, duration:2}}
               src={reactPic} alt="react" height={70} width={70}/>
              <motion.img 
               initial={{ y: 30 , opacity:0}}
                animate={{ y: 0, opacity:1 }}
                transition={{delay:1, duration:2}}
               src={typePic} alt="typescript" height={70} width={70} />
              

            </div>


        </div>
       

    </div>
  )
}

export default AboutComponent