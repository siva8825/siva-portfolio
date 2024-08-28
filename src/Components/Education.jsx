import React from 'react'
import ngm from '../Assets/ngmlogo.jpeg'
import bharathi from '../Assets/bharathi2.jpeg'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Education = () => {
    useEffect(()=>{
        aos.init({duration:2000})
      },[])

const edu=[
    {
    id:1,
    src:ngm,
    clg:'Nallamuthu Gounder Mahalingam College, Pollachi',
    degree:'Bachelor of Commerce - Computer Application',
    year:'2020 - 2023',
    grade:'Grade: 7.00 CGPA',
    about:'I have done a Bachelors degree in Commerce With Computer Application at Nallamuthu Gounder Mahalingam College, Pollachi.Im passed out with a CGPA of 7.01. I have taken courses in Fullstack Development at Kitkat Software Technologies, where I am learning and working on exciting projects with a team of talented developers. '
},

{
    id:2,
    src:bharathi,
    clg:'TMT.Rukmaniammal Higher Secondary School, Pollachi',
    degree:'HSC(XII), Arts and Computer Application',
    year:'2019 - 2020',
    grade:'Grade: 65%',
    style:'h-34',
    about:'I completed my class 12 high school education at Rukmaniammal Higher Secondary School, Pollachi, where I studied Arts and Computer Application.'
},

{
    id:3,
    src:bharathi,
    clg:'TMT.Rukmaniammal Higher Secondary School, Pollachi',
    degree:'SSLC(X)',
    year:'2017 - 2018',
    grade:'Grade: 72%',
    about:'I completed my class 10 high school education at Rukmaniammal Higher Secondary School, Pollachi, where I studied Arts and Computer Application. '
},

]

  return (
    <>
    
    <div name='education'  className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
    <div className='max-w-screen-lg p-4 mx-auto w-full h-full'>
        <div className='pb-8 my-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
            <p className='pt-6'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
        </div>

<div className='flex justify-center' data-aos="zoom-in" >

<div  className='p-6 shadow-lg w-5/6 h-full shadow-gray-600 rounded'>
{edu.map(({id,src,clg,degree,year,grade,about,style})=>(
  <div className='py-10 '>
<div key={id} className='flex flex-col justify-start items-center sm:flex-row w-full h-full gap-8'>
<div>
<img src={src} alt="" className={`w-24 rounded-lg duration-500 hover:scale-110 ${style}`} />
    </div>
    <div>
        <p className='text-2xl font-bold'>{clg}</p>
        <p className='py-2 text-gray-400'>{degree}</p>
        <p className='text-gray-400'>{year}</p>
    </div>
</div>
 <p className='text-gray-400  py-4'>{grade}</p>
 <p className='text-gray-400'>{about}</p>
</div>
))}
</div>
</div>
</div>
</div>

    
    
    
    </>
  )
}

export default Education