import React from 'react'

function FooterComponent() {
  return (
    <div>
        <div className='min-h-[200px] w-full bg-black text-white mt-2 items-center justify-center flex flex-col font-custom'>
            <h1 className='text-[1.5rem] font-bold'>CHIDERA COLLINS <span className='text-red-500'>❤</span>&💡</h1>
            <h1 className='text-[1.3rem]'>Lagos, Nigeria</h1>
            <h3>
                <span>Whatsapp: +234 901 1181 659  </span> |
                    <span>Call : 09016990551</span>
            </h3>
           <p className='text-white text-[1.2rem] capitalize '>
            copywright @ {new Date().getFullYear()} all rights reserved.
           </p>

        </div>
    </div>
  )


      // <a href="mailto:chideracollins24@gmail.com"> Hire me</a>
      //           </button>
      //           <button className='p-[5px] h-[40px] grid items-center  justify-center rounded-md bg-white text-mainBg w-[100px] hover:text-black hover:shadow-lg hover:shadow-[yellow] font-custom text-[1.2rem] '>
      //               <a href="https://github.com/chidera-collins"><VscGithubInverted /></a>
}

export default FooterComponent