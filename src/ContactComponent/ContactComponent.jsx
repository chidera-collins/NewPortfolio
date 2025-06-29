import React from 'react'
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTiktok } from "react-icons/bi";

function ContactComponent() {
  return (
    <div>
        <div id='Contact' className='min-h-[100px] bg-black mt-1 text-white'>
            <div className='flex flex-col  bg min-h-[100px] font-custom w-full items-center'>
                 <div>
                    <h1 className='text-[1.5rem] text-[#c40cc476] flex relative before:w-[30px] items-center before:mt-2 gap-[2px] before:h-[3px] before:rounded-md before:bg-[#c40cc476] lg:text-[2rem] font-bold'>Contact<span className='text-white'>ME</span> </h1>
                </div>
                <div className='w-[95%] min-h-[100px] flex justify-center bg-[#8000807c] flex-col md:flex-row capitalize rounded-md  flex-wrap gap-2 p-[20px]'>
                    <div className='bg-white h-[40px] rounded-xl p-[10px] text-[1.8rem] flex items-center cursor-pointer justify-center md:w-[30%]   '>
                        <a href="mailto:chideracollins24@gmail.com" className='flex gap-2 items-center'>
                            <span className='text-[red]'><MdOutgoingMail /></span><span className='text-[red]'>Email</span>
                        </a>
                    </div>
                    <div className='bg-white h-[40px] rounded-xl p-[10px]  text-[1.8rem] flex items-center cursor-pointer justify-center md:w-[30%]  '>
                        <a href="https://www.tiktok.com/@only_1_dera" className='flex gap-2 items-center'>
                            <span className='text-black'><BiLogoTiktok /></span><span className='text-black'>tiktok</span>
                        </a>
                    </div>
                    <div className='bg-white h-[40px] rounded-xl p-[10px]  text-[1.8rem] flex items-center justify-center md:w-[30%] cursor-pointer  '>
                        <a href="https://www.linkedin.com/in/chidera-collins-a95ba9314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='flex gap-2 items-center'>
                            <span className='text-blue-600'><FaLinkedin /></span><span className='text-blue-600'>Linkedin</span>
                        </a>
                    </div>
                    <div className='bg-white h-[40px] rounded-xl p-[10px] md:w-[30%] text-[1.8rem] flex items-center cursor-pointer  justify-center '>
                        <a href="https://x.com/ChiDeraCollins_" className='flex gap-2 items-center'>
                            <span className='text-black'><FaXTwitter /></span><span></span>
                        </a>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default ContactComponent