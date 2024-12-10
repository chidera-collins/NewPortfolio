import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { GrFormView } from "react-icons/gr";


function ProjectComponent({project=[]}) {
  return (
    <div>
        <div id='Project' className='min-h-[100px] bg-black text-white w-full mt-2'>
            <div className='flex flex-col  min-h-[100px] font-custom w-full items-center'>
                <section className='minh-h-[10px] bg capitalize w-full flex flex-col items-center text-center'>
                    <h1 className='font-bold text-[1.5rem] lg:text-[2rem] text-mainBg before:w-[30px] before:mt-2 gap-1 before:rounded-lg items-center before:h-[3px] before:bg-mainBg flex relative '>projects</h1>
                    <p className='font-semibold text-[1.6rem]'>some of my projects</p>
                </section>
                <div className='w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black min-h-[300px] p-[10px]'>
                    {project.map((item,index)=>(
                        <div key={index} className=" bg-[#402714] group p-[10px] rounded-lg  overflow-x-hidden shadow-xl">
                        <figure>
                          <img
                            src={item.img}
                            alt={item.about}
                            className='group-hover:scale-110   transition duration-500  ease-in-out'
                            
                            />
                        </figure>
                        <div className="card-body ">
                            <div>
                                <h1 className='card-title font-custom font-bold text-[1.3rem] lg:text-[1.8rem] capitalize'>{item.name}</h1>
                            </div>
                            <div className='mb-3 flex flex-col gap-2'>
                                <div >
                                    <h1 className='font-custom font-bold text-[1.4rem]'>Project Category</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <div>
                                    <h2 className="flex bg-white text-mainBg font-custom capitalize text-[1.3rem] p-[5px]  rounded-xl items-center"> <BiCategoryAlt />{item.about}</h2>
                                  
                                    </div>
                                    <div className='flex  bg-white text-mainBg font-custom capitalize text-[1.3rem] p-[5px] rounded-xl items-center'>
                                    <p className='flex gap-1 items-center' > <BiCategoryAlt />{item.idea}</p>
                                    </div>
                              
                                </div>
                        
                            </div>

                            <div className=" flex flex-col gap-2">
                                <div>
                                    <h1 className='font-custom font-bold text-[1.4rem]'>Technologies used</h1>
                                </div>
                                <div className='flex gap-2'>
                                <h1 className="flex bg-white text-mainBg font-custom font-semibold capitalize text-[1.3rem]  p-[8px] rounded-xl items-center gap-2">{item.tech1}</h1>
                                <h1 className='flex bg-white text-mainBg font-custom capitalize text-[1.3rem] p-[8px] rounded-xl items-center'>{item.tech2}</h1>
                                </div>             
                           </div>
                           <div className='flex gap-2 mt-2'>
                                <a href={item.hub} target="_blank" rel="noopener noreferrer" className="  bg-white text-mainBg  hover:text-black hover:shadow-lg font-custom text-[1.2rem] rounded-xl">
                                <button  className='h-[40px] w-[100px] p-[10px] flex items-center gap-2  '>
                                <VscGithubInverted /> GitHub
                                </button>
                                 </a>
                                 <a href={item.view}  target="_blank" rel="noopener noreferrer" className="rounded-xl  bg-white text-mainBg  hover:text-black hover:shadow-lg font-custom text-[1.2rem]"><button  className='h-[40px] w-[100px] p-[10px] flex items-center gap-2  '>
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