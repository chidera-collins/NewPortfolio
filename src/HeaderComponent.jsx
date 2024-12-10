import React, { useEffect, useState } from 'react'

function HeaderComponent() {
    let [subnav,setSubnav] = useState('-1000px')
    const [isScrolled, setIsScrolled] = useState(false);

  function subnavDisplay() {
    if (subnav==='-1000px') {
        setSubnav('0')   
    }else(
        setSubnav('-1000px')
    )


    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  }
  return (
    <div
      className={` sticky top-0 left-0 w-full z-50 ${
         isScrolled ? 'bg-black' : 'bg-mainBg'
      } transition-all duration-300`}
    >


        {/* FOR SMALL AND MEDIUM SCREEN  */}
       <div className='min-h-[20px] w-full p-[10px] flex justify-between  items-center box-border text-white relative lg:hidden'>
            <div className='text-[1.2rem] font-bold font-custom p-[5px] '>
                <h1>DERA CODES</h1>
            </div>
            <div className='p-[5px]'>
              <button onClick={subnavDisplay} className='font-bold text-[1.2rem]' >
                Ξ
              </button>
            </div>
            <div className='absolute h-[43vh] z-10 w-full bg-black text-white leading-[75px] justify-center grid text-[1.2rem] font-custom font-bold' style={{top:subnav,transition:'top 1s ease-in-out'}}>
                <ul>
                    <li className='' onClick={subnavDisplay}>
                        <a href="#Home">Home</a>
                    </li>
                    <li onClick={subnavDisplay}>
                        <a href="#About">About</a>
                    </li>
                    <li onClick={subnavDisplay}>
                        <a href="#Project">Project</a>
                    </li>
                    <li onClick={subnavDisplay}>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
       </div>


       {/* FOR BIG SCREEN  */}
       <div className='min-h-[50px] w-full  text-white hidden lg:flex items-center font-custom font-bold justify-between p-[10px]'>
        <div className='uppercase'>
            <h1>dera codes</h1>
        </div>
        <div className=' w-[30%]'>
            <ul className='flex  gap-3 items-center justify-around '>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>  
                    <a href="#About">About</a>

                </li>
                <li>
                     <a href="#Project">Project</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>

       </div>
        

    </div>
  )
}

export default HeaderComponent