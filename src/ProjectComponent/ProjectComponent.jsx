import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { GrFormView } from "react-icons/gr";


function ProjectComponent({project=[]}) {
  return (
    <div>
        <div id='Project' className='min-h-[100px] bg-black text-white w-full mt-2 '>
            <div className='flex flex-col  min-h-[100px] font-custom w-full items-center '>
                <section className='minh-h-[10px] bg capitalize w-full flex flex-col items-center text-center'>
                    <h1 className='font-bold text-[1.5rem] lg:text-[2rem] text-[#c40cc476] before:w-[30px] before:mt-2 gap-1 before:rounded-lg items-center before:h-[3px] before:bg-[#c40cc476] flex relative '>projects</h1>
                    <p className='font-semibold text-[1.6rem]'>some of my projects</p>
                </section>
                <div className='w-[80%]   lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg- min-h-fit p-[10px]'>
                    {project.map((item,index)=>(
                        <div key={index} className="  group rounded-lg  overflow-x-hidden shadow-xl bg-[#8000805a]">
                            <figure>
                            <img
                                width={700}
                                height={400}
                                src={item.img}
                                alt={item.about}
                                className='group-hover:scale-105   transition duration-500  ease-in-out'
                                
                                />
                            </figure>
                        <div className="">
                            <div>
                                <h1 className=' font-custom font-bold text-[1.3rem] lg:text-[1.8rem] capitalize'>{item.name}</h1>
                            </div>
                            <div className='mb-3 flex flex-col gap-2'>
                                <div>
                                    <h1 className='font-custom font-bold text-[1.4rem]'>Project Category</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <div>
                                        <h2 className="flex bg-white text-black font-custom capitalize text-[1.3rem] p-[5px]  rounded-xl items-center"> <BiCategoryAlt />{item.about}</h2>                                  
                                    </div>
                                <div className='flex  bg-[#ffffffcd] text-black font-custom capitalize text-[1.3rem] p-[5px] rounded-xl items-center'>
                                    <p className='flex gap-1 items-center' > <BiCategoryAlt />{item.idea}</p>
                                    </div>                      
                                </div>
                        
                            </div>

                            <div className=" flex flex-col flex-wrap gap-2">
                                <div>
                                    <h1 className='font-custom font-bold text-[1.4rem]'>Technologies Used</h1>
                                </div>
                                <div className='flex gap-2 flex-wrap'>
                                <h1 className="flex bg-[#fffffff0] text-black font-custom font-semibold capitalize text-[1.3rem]  p-[8px] rounded-xl items-center gap-2">{item.tech1}</h1>
                                <h1 className='flex bg-white text-black font-custom capitalize text-[1.3rem] p-[8px] rounded-xl items-center'>{item.tech2}</h1>
                                <h1
                                    className={`${item.tech3 ? 'flex bg-[#ffffffcd] text-black font-custom capitalize text-[1.3rem] p-[8px] rounded-xl items-center' : ''}`}
                                    >
                                    {item.tech3}
                                    </h1>
                                </div>             
                           </div>
                           <div className='flex gap-2 mt-4'>
                                {item.hub && (
                                        <a 
                                            href={item.hub} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="bg-black text-[#c40cc476] hover:text-white hover:shadow-lg font-custom text-[1.2rem] rounded-xl"
                                        >
                                            <button className="h-[40px] w-[100px] p-[10px] flex items-center gap-2">
                                            <VscGithubInverted /> GitHub
                                            </button>
                                        </a>
                                        )}
                                 <a href={item.view}  target="_blank" rel="noopener noreferrer" className="rounded-xl  bg-black text-[#c40cc476]  hover:text-white hover:shadow-lg font-custom text-[1.2rem]"><button  className='h-[40px] w-[100px] p-[10px] flex items-center gap-2  '>
                                 <GrFormView />View
                                    </button></a>
                           </div>
                        </div>
                       
                      </div>
                    ))}
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProjectComponent