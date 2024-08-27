import React from 'react'
import html from '../Assets/html.png'
import Js from '../Assets/javascript.png'
import vscode from '../Assets/vscode.png'
import redux from '../Assets/redux.png'
import react from '../Assets/react.png'
import mangodb from '../Assets/mongodb.png'
import node from '../Assets/node.png'
import github from '../Assets/github.png'
import tailwind from '../Assets/tailwind.png'
import css from '../Assets/css.png'
import netlify from '../Assets/netlify.png'
import reactbootstrap from '../Assets/reactbootstrap.jpeg'
const Skills = () => {
    const techs=[
        {
         id:1,
         src:html,
         title:'HTML',
         style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
   },
   {
    id:3,
    src:Js,
    title:'JavaScript',
    style:'shadow-yellow-500'
},
{
    id:4,
    src:react,
    title:'React',
    style:'shadow-blue-300'
},
{
    id:5,
    src:vscode,
    title:'VScode',
    style:'shadow-blue-400'
},
{
    id:6,
    src:redux,
    title:'Redux',
    style:'shadow-purple-500'
},
{
    id:7,
    src:tailwind,
    title:'Tailwind',
    style:'shadow-sky-400'
},
{
    id:8,
    src:node,
    title:'Node Js',
    style:'shadow-green-500'
},
{
    id:9,
    src:mangodb,
    title:'MongoDB',
    style:'shadow-green-600'
},
{
    id:10,
    src:github,
    title:'GitHub',
    style:'shadow-gray-400'
},
{
    id:11,
    src:reactbootstrap,
    title:'React Bootstap',
    style:'shadow-sky-200'
},
{
    id:12,
    src:netlify,
    title:'Netlify',
    style:'shadow-green-200'
},
]
  return (
    <>
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>Here are some of my skills on which I have been working on for the past 1 year.</p>
            </div>

<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

    {
        techs.map(({id,src,title,style})=>(
<div key={id} className={`shadow-md hover:scale-105 duration-500 py-3 mb-8 rounded-lg ${style}`}>
        <img src={src} alt="" className='w-20 mx-auto' />
        <p className='mt-4'>{title}</p>
    </div>
        ))
    }
    
</div>

        </div>
    </div>
    
    </>
  )
}

export default Skills