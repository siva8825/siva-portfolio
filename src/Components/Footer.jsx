import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-scroll'

const Footer = () => {

const foot1=[
    {
        id:1,
        link:'about'
    },
    {
        id:2,
        link:'skills'
    },
    {
        id:3,
        link:'experience'
    },
    {
        id:4,
        link:'projects'
    },
    {
        id:5,
        link:'education'
    },
]


    const foot2 =[
        {
            id:1,
            child:(
                <>
                 <FaLinkedin size={20} className='duration-300 scale-105'/>
                </>
            ),
            href:'https://www.linkedin.com/in/sivanesh-kumar-2936a425a',
            },
    
            {
                id:2,
                child:(
                    <>
                     <FaGithub size={20} className='duration-300 scale-105'/>
                    </>
                ),
                href:'https://github.com/siva8825',
                },
    
    
                {
                    id:3,
                    child:(
                        <>
                         <HiOutlineMail size={20} className='duration-300 scale-105'/>
                        </>
                    ),
                    href:'mailto:sivaneshk826@gmail.com',
                    },
    
    
                    {
                        id:4,
                        child:(
                            <>
                         <FaInstagram  size={20} className='duration-300 scale-105'/>
                            </>
                        ),
                        href:'https://www.instagram.com/_.sk_.8825/',
                        },
    
                        {
                            id:5,
                            child:(
                                <>
                                <BsFillPersonLinesFill size={20} className='duration-300 scale-105'/>
                                </>
                            ),
                            href:'/New Fullstack Resume.pdf',
                            download:true
                            },
    ]

     
  return (
    <>
    <div className='bg-gradient-to-b from-gray-800 to-black w-full md:h-full text-white  '>
        <div className='py-8 max-w-screen-lg p-4 mx-auto w-full h-full'>
            <div className='mt-10'>
              <p className='text-xl text-center font-bold text-white'>SIVANESH KUMAR P</p> 
            </div>


            <div className='py-8'>
            <ul className='flex justify-center items-center gap-10 max-sm:gap-4'>
            {foot1.map(({id,link})=>(
                 <li key={id} className='flex justify-center items-center hover:scale-105 capitalize duration-200 cursor-pointer '><Link to={link} smooth duration={500}>{link}</Link></li>
            ))}
               
            </ul>
            </div>


            <div>
            <ul className='flex justify-center items-center gap-10'>
                {foot2.map(({id,child,href,download})=>(
                    <li key={id}>
                        <a href={href} download={download} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full'> 
                           {child}
                            </a> 
                            </li>
                ))}
                
            </ul>
            </div>
<div className='text-center pt-8'><p>© 2023 Sivanesh Kumar. All rights reserved.</p></div>

        </div>
    </div>
    
    
    </>
  )
}

export default Footer