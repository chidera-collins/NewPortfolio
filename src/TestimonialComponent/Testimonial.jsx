import React from 'react'
import Flag from 'react-world-flags'
import { motion } from 'motion/react'
import StarRatings from 'react-star-ratings'

function Testimonial() {

  return (
    <div>
        <div className='min-h-[100px] bg-black mt-1 text-white'>
            <div className='flex flex-col  bg- min-h-[900px] md:min-h-[700px] lg:min-h-[500px] font-custom w-full items-center'>
                <div>
                    <h1 className='text-[1.5rem] text-mainBg flex relative before:w-[30px] items-center before:mt-2 gap-[2px] before:h-[3px] before:rounded-md before:bg-mainBg lg:text-[2rem] font-bold'>TESTIMONIALS</h1>
                </div>
                <div className='w-[95%] min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 '>
                    <motion.div 
                         initial={{ x: -30 , opacity:0}}
                         whileInView={{ x: 0, opacity:1 }}
                         transition={{delay:1.1, duration:2}}
                          viewport={{ once: true }}
                    className='bg-white text-black p-[10px] grid grid-rows-[20%,50%,15%] gap-2 rounded-lg'>
                        <div className='flex justify-between'>
                            <div className='bg-[#402714] h-[40px] px-3 w-[40px] flex items-center justify-center rounded-[50%]'>
                                <div className='w-10 '>
                                    <Flag code="US" style={{ width: "30px", height: "auto" }} />
                                </div>
                            </div>
                            <div className='rating'>
                            <StarRatings
                                rating={5} 
                                starRatedColor="#402714" // The color of filled stars
                                numberOfStars={5} // Total number of stars
                                starDimension="20px" // Size of each star
                                starSpacing="1px" // Spacing between stars
                            />

                             
                            </div>
                          
                        </div>
                        <div>
                            <p className='font-medium text-[1.2rem] lg:text-[1.4rem]'>
                                Met Chidera early 2024, I'm super amazed at his growth, Keep winning Bro
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className="avatar">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                            </div>
                            <hr  className='bg-red-300'/>
                            <div className=''>
                                <h1 className='capitalize font-bold text-[1.2rem]'>shawn </h1>
                                <h3 className='flex gap-1 capitalize'>
                                    <Flag code="US" style={{ width: "25px", height: "auto" }} /> New York, USA

                                </h3>
                            </div>
                        </div>
                       
                      
                    </motion.div>
                    <motion.div
                          initial={{ x: 0 , opacity:0}}
                          whileInView={{ x: 0, opacity:1 }}
                          transition={{delay:1, duration:2}}
                           viewport={{ once: true }}
                     className='bg-white text-black p-[10px] gap-3 grid grid-rows-[10%,60%,15%]  rounded-lg'>
                        <div className='flex justify-between'>
                            <div className='bg-[#402714] h-[40px] px-3 w-[40px] flex items-center justify-center rounded-[50%]'>
                                <div className='w-10 '>
                                    <Flag code="NG" style={{ width: "30px", height: "auto" }} />
                                </div>
                            </div>
                            <div className='rating'>
                            <StarRatings
                                rating={5} 
                                starRatedColor="#402714" // The color of filled stars
                                numberOfStars={5} // Total number of stars
                                starDimension="20px" // Size of each star
                                starSpacing="1px" // Spacing between stars
                            />
                            </div>
                          
                        </div>
                        <div>
                            <p className='font-medium text-[1.2rem] text-start lg:text-[1.4rem]'>
                            Working with Chidera has been an absolute pleasure! He's extremely skilled and efficient. I highly recommend him to anyone looking for top-notch work. His attention to detail and commitment to meeting project goals truly set him apart. A great choice for any project!
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className="avatar">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                            </div>
                            <hr  className='bg-red-300'/>
                            <div className=''>
                                <h1 className='capitalize font-bold text-[1.2rem]'>j.i  isreal</h1>
                                <h3 className='flex gap-1 capitalize'>
                                    <Flag code="NG" style={{ width: "25px", height: "auto" }} /> abuja,Nigeria

                                </h3>
                            </div>
                        </div>
                       
                      
                    </motion.div>
                    <motion.div 
                        initial={{ x: 30, opacity:0}}
                        whileInView={{ x: 0, opacity:1 }}
                        transition={{delay:1, duration:2}}
                         viewport={{ once: true }}
                    className='bg-white text-black p-[10px] gap-3 grid grid-rows-[10%,60%,15%]  rounded-lg'>
                        <div className='flex justify-between'>
                            <div className='bg-[#402714] h-[40px] px-3 w-[40px] flex items-center justify-center rounded-[50%]'>
                                <div className='w-10 '>
                                    <Flag code="ae" style={{ width: "30px", height: "auto" }} />
                                </div>
                            </div>
                            <div className='rating'>
                            <StarRatings
                                rating={5} 
                                starRatedColor="#402714" // The color of filled stars
                                numberOfStars={5} // Total number of stars
                                starDimension="20px" // Size of each star
                                starSpacing="1px" // Spacing between stars
                            />
                            </div>
                          
                        </div>
                        <div>
                            <p className='font-medium text-[1.2rem] text-start lg:text-[1.4rem]'>
                        
                            Chidera, Thank you for all your hard work throughout this engagement. I have been very impressed and it's been a pleasure to work with you.
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className="avatar">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                            </div>
                            <hr  className='bg-red-300'/>
                            <div className=''>
                                <h1 className='capitalize font-bold text-[1.2rem]'>
                                Bilal Karimbath</h1>
                                <h3 className='flex gap-1 capitalize'>
                                    <Flag code="ae" style={{ width: "25px", height: "auto" }} /> dubai,UAE

                                </h3>
                            </div>
                        </div>
                       
                      
                    </motion.div>



                       

                </div>

            </div>

        </div>
    </div>
  )
}

export default Testimonial