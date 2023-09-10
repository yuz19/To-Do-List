import React, { useEffect, useState } from 'react'

function Home() {
    const [typeSign,SetTypeSign]=useState('Sign In')
    useEffect(()=>{

    })
  return (
    <div className='flex flex-col pt-20 items-center h-screen text-3xl gap-5'>
        <h1 className='text-9xl '>
            ToDoList
        </h1>
        <div className='Login-Card w-1/3  bg-SecondaryColor rounded-lg overflow-hidden'>

            <div className='flex w-full text-center border-b-2 border-PrimaryColor'>
                <h3 className={`text-4xl w-1/2 ${typeSign==='Sign In'? 'bg-SecondaryColor':'bg-HoverSecondary'} font-semibold cursor-pointer`} onClick={(e)=>SetTypeSign(e.target.textContent)}>Sign In</h3>
                <h3 className={`text-4xl w-1/2 ${typeSign==='Sign Up'? 'bg-SecondaryColor':'bg-HoverSecondary'} font-semibold cursor-pointer`}onClick={(e)=>SetTypeSign(e.target.textContent)}>Sign Up</h3>
            </div>
            {typeSign==='Sign In'? 
            <form action="" className=' flex py-2 flex-col justify-center items-center    w-full h-72 '>
 
                <label htmlFor="Email" className='font-semibold   w-10/12'>Email : </label>
                <input type="text" id="Email" className='w-10/12  font-sans text-2xl p-1 focus:outline-none'  placeholder='Email....'/>

                <label htmlFor="Password" className='font-semibold w-10/12 mt-4'>Password : </label>
                <input type="password" id="Password" className='w-10/12 font-sans text-2xl p-1 focus:outline-none' placeholder='Password....'/>
               
                <button className='bg-HoverSecondary w-10/12 m-4'>Sign In</button>
            </form>
            : 
            <form action="" className=' flex py-2 flex-col justify-center items-center   w-full h-96 '>
 
            <label htmlFor="Email" className='font-semibold   w-10/12'>Email : </label>
            <input type="text" id="Email" className='w-10/12  font-sans text-2xl p-1 focus:outline-none'  placeholder='Email....'/>

            <label htmlFor="Password" className='font-semibold w-10/12 mt-4'>Password : </label>
            <input type="password" id="Password" className='w-10/12 font-sans text-2xl p-1 focus:outline-none' placeholder='Password....'/>
            
            <label htmlFor="CPassword" className='font-semibold w-10/12 mt-4'>Confirm Your Password : </label>
            <input type="password" id="CPassword" className='w-10/12 font-sans text-2xl p-1 focus:outline-none' placeholder='Password....'/>
           
            <button className='bg-HoverSecondary w-10/12 m-4'>Sign Up</button>
            </form>   
        }
        
        </div>
    </div>
  )
}

export default Home