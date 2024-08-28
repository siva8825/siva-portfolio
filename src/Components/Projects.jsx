import React from 'react'
import crud from '../Assets/Crud.png'
import ecommerce from '../Assets/Ecommerce.png'
import weather from '../Assets/Weatherapp.png'
import todo from '../Assets/Todo List.png'
import intuit from '../Assets/Intuit Mailchimp.png'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Projects = () => {
    useEffect(()=>{
        aos.init({duration:2000})
      },[])
    const projects=[
        
        {
            id:1,
            src:ecommerce,
            title:'Ecommerce Website',
           code:'https://github.com/siva8825/ecommerce-project.git',
           demo:'https://siva-ecommerce-website.netlify.app'
        },
        
        {
            id:2,
            src:weather,
            title:'Weather App',
            code:'https://github.com/siva8825/weather-app.git',
            demo:'https://siva-weather-app.netlify.app'
        },
        
        {
            id:3,
            src:todo,
            title:'Todo List',
            code:'https://github.com/siva8825/todo-list.git',
            demo:'https://siva-todo-lists.netlify.app'
        },

        {
            id:4,
            src:crud,
            title:'CRUD Application',
            code:'https://github.com/siva8825/crud-.git'
        },
        
        {
            id:5,
            src:intuit,
            title:'Mailchimp Website-Clone',
            code:'https://github.com/siva8825/intuit-website.git',
          
        },
        
    ]
  return (
    <>
    <div name='projects' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6 '>I have worked on a wide range of projects in web apps. Here are some of my projects.</p>
            </div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' data-aos="zoom-in">

{projects.map(({id,src,title,code,demo})=>(

    <div key={id} className='shadow-md shadow-gray-600 py-6 mb-6 rounded-lg'>
    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
    <p className='text-2xl text-center py-4'>{title}</p>
    <div className='flex items-center justify-center'> 
       <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 border-l-4 border-gray-10  hover:scale-105'>Demo</a>
        <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 border-r-4 border-gray-10   hover:scale-105'>Code</a>
    </div>
</div>

))
}

</div>

        </div>
    </div>
    </>
  )
}

export default Projects