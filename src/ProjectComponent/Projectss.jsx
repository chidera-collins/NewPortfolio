import React from 'react'
import lawcut from './ProjectPic/lawcut.png'
import wilcon from './ProjectPic/wilcon.png'
import zoo from './ProjectPic/zoo.png'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import ProjectComponent from './ProjectComponent';

function Projectss() {
    const project = [
        {
            img:lawcut,
            name:'Lawn cut',
            about:'Barber site',
            idea:'single page',
            tech1:<><RiTailwindCssFill /> tailwind</>,
            tech2:<> <FaReact /> React</>,
            hub:'https://github.com/chidera-collins/Lawcutz',
            view:'https://lawncutz.vercel.app/'

        },
        {
            img:wilcon,
            name:'wilcon lab',
            about:'Medical Services',
            idea:'Medishop',
            tech1:<><RiTailwindCssFill /> tailwind</>,
            tech2:<> <FaReact /> React</>,
            hub:'https://github.com/chidera-collins/WilconLab',
            view:'https://wilcon-lab.vercel.app/'

        },
        {
            img:zoo,
            name:'zoo simulator',
            about:'Animal Life',
            idea:'animal care',
            tech1:<><RiTailwindCssFill /> tailwind</>,
            tech2:<> <FaReact /> React</>,
            hub:'https://github.com/chidera-collins/zoosimulator',
            view:'https://zoosimulator.vercel.app/'
        }
    ]
  return (
    <div id='Project'><ProjectComponent project={project}/></div>
  )
}

export default Projectss