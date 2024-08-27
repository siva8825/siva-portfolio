import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const SocialLinks = () => {
    const links =[
        {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/sivanesh-kumar-2936a425a',
        style:'rounded-tr-md'
        },

        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/siva8825',
     
            },


            {
                id:3,
                child:(
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </>
                ),
                href:'mailto:sivaneshk826@gmail.com',
              
                },


                {
                    id:4,
                    child:(
                        <>
                        Instagram <FaInstagram  size={30}/>
                        </>
                    ),
                    href:'https://www.instagram.com/_.sk_.8825/',
                    download:true
                    },

                    {
                        id:5,
                        child:(
                            <>
                            Resume <BsFillPersonLinesFill size={30}/>
                            </>
                        ),
                        href:'/dev resume.pdf',
                        style:'rounded-br-md',
                        download:true
                        },
    

]
  return (
    <>
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>

<ul>
{links.map(({id,child,href,style,download}) =>(
    <li key={id} className={ 'flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 '+""+style }>
        <a href={href} rel='noreferrer' download={download} target='_blank' className='flex justify-between items-center w-full text-white'>
           {child}
        </a>
    </li>
))}

    
</ul>

    </div>
    </>
  )
}

export default SocialLinks