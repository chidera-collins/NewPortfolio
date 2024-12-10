import React from 'react'
import {motion} from "motion/react"


function AboutComponent() {
  return (
    <div>
        <div id='About' className='min-h-[100px] w-full  bg-black text-white'>
            <div className='h-[40px] w-full flex justify-center items-center p-[10px] '>
                <h1 className='font-bold text-[1.7rem] lg:text-[2rem] font-custom relative before:w-[30px] before:h-[3px] before:bg-mainBg gap-1 flex items-center text-white before:rounded-lg '><span className='text-mainBg'>Learn</span> About Me</h1>
            </div>
            <div className='flex flex-col items-center bg mt-2 min-h-[100px] '>
              <div className='w-full md:w-[95%] '>
                <h1 className='text-[1.4rem] md:text-[1.5rem] lg:text-[2.5rem] capitalize font-custom font-bold '>two(2) years experience </h1>
              </div>
              <motion.div 
                initial={{ x: 30 , opacity:0}}
                animate={{ x: 0, opacity:1 }}
                transition={{delay:1.5, duration:4}}
              className='bg-[#402714] rounded-lg w-[95%]'>
                <p className='leading-[34px] text-[1.1rem] lg:text-[1.3rem] text-start  p-[10px] box-border'>
                    Welcome to my portfolio ,i'm Collins, a driven front-end developer based in Lagos,Nigeria.
                    My technical proficiency spans HTML, CSS, JavaScript and Tailwind, with a specialization in React JavaScript frameworks. I'm passionate about staying updated on the latest trends and advancements in the field. 
                </p>
                <p className='mt-1 leading-[30px] text-[1.1rem] lg:text-[1.3rem] p-[10px]'>
                I specialise in buliding responsive website that leaves a lasting impression while solving real life problems, utilizing SAAS       (Software as a Service) solutions to streamline business processes and enhance productivity.
                </p>
                <p className='leading-[30px] text-[1.1rem] lg:text-[1.3rem] p-[10px]'>
                  Feel free to explore my portfolio and get in touch to discuss how i can participate and bring your next web project to life.
                </p>
              </motion.div>
              <div className='min-h-[300px] w-[95%] mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
             
                <motion.div 
                  initial={{ x: -30 , opacity:0}}
                  whileInView={{ x: 0, opacity:1 }}
                  transition={{delay:1.5, duration:4}}
                   viewport={{ once: true }}
                className='bg-[#3e2410] rounded-lg  ' >
                  <div>
                    <h1 className='before:mt-2 gap-1 font-bold font-custom text-[1.5rem] lg:text-[2rem] flex relative before:w-[30px] before:h-[3px] before:bg-mainBg before:rounded-lg items-center text-center '><span className='text-mainBg'>Soft</span>     Skills</h1>
                  </div>
                  <div className='font-custom leading-[40px] capitalize' >
                    <ul className='dotted-list text-[1.1rem] lg:text-[1.4rem]'>
                      <li>Proper Detailed Communication</li>
                      <li>Teamwork contributions</li>
                      <li>flexibility</li>
                      <li>troubleshooting</li>
                      <li>time management</li>
                    </ul>
                  </div>

                </motion.div>
                <motion.div 
                   initial={{ x: 0 , opacity:0}}
                   whileInView={{ x: 0, opacity:1 }}
                   transition={{delay:1.5, duration:4}}
                    viewport={{ once: true }}
                className='bg-[#3e2410] rounded-lg font-custom grid '  style={{boxShadow:'0 0 25px black'}}>
                  <div>
                    <h1 className='before:mt-2 gap-1 font-bold text-[1.5rem] lg:text-[2rem] flex relative before:w-[30px] before:h-[3px] before:bg-mainBg before:rounded-lg items-center text-center '><span className='text-mainBg'>Hard</span>     Skills</h1>
                  </div>
                  <div>
                    <h1 className='font-bold text-[1.3rem] lg:text-[2rem]'>Markup and styling</h1>
                    <ul className='dotted-list text-[1.1rem] lg:text-[1.4rem]'>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>TAILWIND</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold text-[1.3rem] lg:text-[2rem]'>Build tools</h1>
                    <ul className='dotted-list text-[1.1rem] lg:text-[1.4rem]'>
                      <li>Vite</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold text-[1.3rem]'>Programming Languages</h1>
                    <ul className='dotted-list text-[1.1rem] lg:text-[1.4rem]'>
                      <li>Javascript</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold text-[1.3rem]'>Version Control</h1>
                    <ul className='dotted-list text-[1.1rem] lg:text-[1.4rem]'>
                      <li>Git & Github</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                   initial={{ x: 30 , opacity:0}}
                   whileInView={{ x: 0, opacity:1 }}
                   transition={{delay:1.5, duration:4}}
                    viewport={{ once: true }}
                className='bg-[#3e2410] rounded-lg flex flex-col gap-4 ' >
                  <div>
                    <h1 className='before:mt-2 gap-1 font-bold font-custom text-[1.5rem] md:text-[1.3rem] lg:text-[2rem] flex relative before:w-[30px] before:h-[3px] before:bg-mainBg before:rounded-lg items-center text-center '><span className='text-mainBg'>Degree</span>& Certification</h1>
                  </div>
                  <div>
                    <ul className='font-custom  text-[1.3rem] lg:text-[1.4rem] dotted-list'>
                      <li className='leading-[40px]'>Diploma in Front-end Web Development (2023) - Bitxbase Computer Education, Lagos.</li>
                      <li className='leading-[40px]'>Bachelor of Science, Political Science (2018-2023)- Chukwuemeka Odumegwu Ojukwu University</li>
                    </ul>
                  </div>

                </motion.div>

              </div>
                
            </div>


        </div>
    </div>
  )
}

export default AboutComponent