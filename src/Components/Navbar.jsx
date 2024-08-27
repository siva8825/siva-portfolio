import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav,setNAv]=useState(false)
    const links=[
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
    
  return (
<>
<div className="flex justify-between z-50 items-center w-full h-20 text-white bg-black fixed px-4">
    <div>
        <h1 className='text-5xl font-signature'>Siva</h1>
    </div>
    <ul className='hidden md:flex '>
        {links.map(({id,link}) =>(
  <li key={id} className='px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 capitalize duration-200'>
    <Link to={link} smooth duration={500}>{link}</Link>
  </li>
        ))}
      
    </ul>
<div onClick={()=>setNAv(!nav)} 
className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
</div>
{nav && (
    <ul className='flex flex-col z-9 justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
{links.map(({id,link}) =>(
  <li key={id} className='px-4 cursor-pointer capitalize py-6 '>
        <Link onClick={()=>setNAv(!nav)} to={link} smooth duration={500}>{link}</Link>
  </li>
        ))}

</ul>
)}


</div>

</>
    
    
  )
}

export default Navbar