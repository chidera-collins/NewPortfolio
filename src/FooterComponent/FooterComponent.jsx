import React from 'react'

function FooterComponent() {
  return (
    <div>
        <div className='min-h-[200px] w-full bg-black text-white mt-2 items-center justify-center flex flex-col font-custom'>
            <h1 className='text-[1.5rem] font-bold'>CHIDERA COLLINS <span className='text-red-500'>❤</span>&💡</h1>
            <h1 className='text-[1.3rem]'>lagos, Nigeria</h1>
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
}

export default FooterComponent