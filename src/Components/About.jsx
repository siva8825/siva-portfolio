import React from 'react'
import myImg from '../Assets/Sivaimg2.jpg'

const About = () => {
    
  return (
    <>
   <div name="about" className='h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 '>
    <div className='max-w-screen-lg mx-auto text-white flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center px-4 h-full'>
            <h2 className='text-4xl sm:text-6xl max-sm:mt-10 font-bold'>I'm a Full Stack Developer</h2>



            <p className='text-gray-500 py-4  '>I am Sivanesh Kumar, a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
         <div>
            <a href="https://drive.google.com/file/d/1p1rbqYksWn_vI5Z0HMo4wsePYEweyiak/view?usp=sharing"><button className='w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Resume</button></a>
         </div>
        </div>
        <div>
            <img src={myImg} alt="My Img" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
    </div>
   </div>
    
    </>
  )
}

export default About