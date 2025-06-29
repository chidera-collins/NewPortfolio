import React, { useEffect, useState } from 'react'
import { VscGithubInverted } from 'react-icons/vsc';

function HeaderComponent() {
    let [subnav,setSubnav] = useState('-1000px')
    const [isSticky, setIsSticky] = useState(false);

  function subnavDisplay() {
    if (subnav==='-1000px') {
        setSubnav('0')   
    }else(
        setSubnav('-1000px')
    )
  }


      useEffect(() => {
        const handleScroll = () => {
         window.scrollY > 200 ? setIsSticky(true) : setIsSticky(false)
         console.log(isSticky)
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <div
      className={` w-[95%] z-50 rounded-md translate-x-2 lg:translate-x-9 mt-3 backdrop-blur-xl ${
         isSticky ? ' fixed bg-[#8000805a]/40 backdrop-blur-xl shadow-md'  : 'bg-[#8000805a] relative'
      } transition-all duration-300`}
    >


        {/* FOR SMALL AND MEDIUM SCREEN  */}
       <div className='min-h-[20px] w-full  flex justify-between  items-center box-border text-white  lg:hidden'>
            <div className='text-[1.2rem] font-bold font-custom p-[5px] '>
                <a href='#Home'>DERA CODES</a>
            </div>
            <div className='p-[5px]'>
              <button onClick={subnavDisplay} className='font-bold text-[1.2rem]' >
                Ξ
              </button>
            </div>
            <div className='absolute h-[43vh] w-full z-40 bg-black text-white leading-[75px] justify-center grid text-[1.2rem] font-custom font-bold' style={{top:subnav,transition:'top 1s ease-in-out'}}>
                <ul>
                    <li className='' onClick={subnavDisplay}>
                        <a href="#Home">Home</a>
                    </li>
                    <li onClick={subnavDisplay}>
                        <a href="#Project">Project</a>
                    </li>
                    <li onClick={subnavDisplay}>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li onClick={subnavDisplay}>
                       <a href="https://github.com/chidera-collins"><VscGithubInverted /></a>
                    </li>
                </ul>
            </div>
       </div>


       {/* FOR BIG SCREEN  */}
       <div className='min-h-[50px] w-full  text-white hidden lg:flex items-center font-custom font-bold justify-between p-[10px]'>
        <div className='uppercase'>
            <a href='#Home'>dera codes</a>
        </div>
        <div className=' w-[30%]'>
            <ul className='flex  gap-3 items-center justify-around '>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                     <a href="#Project">Project</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
                <li>
                       <a href="https://github.com/chidera-collins"><VscGithubInverted /></a>
                </li>
            </ul>
        </div>

       </div>
        

    </div>
  )
}

export default HeaderComponent