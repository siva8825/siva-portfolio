import React from 'react'
import kitkat from '../Assets/kitkat.jpeg'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Experience = () => {
    useEffect(()=>{
        aos.init({duration:2000})
      },[])
  return (<>

<div name='experience'  className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white' >
    <div className='max-w-screen-lg p-4 mx-auto w-full h-full'>
        <div className='pb-8 my-20'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            <p className='py-6'>My work experience as a Fullstack Developer and working in a company projects.</p>
        </div>

<div className='flex justify-center' data-aos="zoom-in">
<div className='p-6 shadow-lg w-5/6 h-full shadow-gray-600 rounded'>
<div className='flex flex-col justify-start items-center sm:flex-row w- h-full gap-8'>

    <div>
<img src={kitkat} alt="" className='w-36 rounded-lg' />
    </div>
    <div>
        <p className='text-2xl font-bold'>Fullstack Development</p>
        <p className='py-6 text-gray-400'>Kitkat Software Technologies</p>
        <p className='text-gray-400'>Feb 2024 - August 2024</p>
    </div>
</div>
<p className='text-gray-400 py-4'>I have worked in many live project for my company by using my skills. I was the top performer in every live project.</p>
</div>
</div>




    </div>
</div>


    </>)
}

export default Experience