import React from 'react'

function ToDo() {
  return (
    <>
            <header className='py-5 flex items-center  justify-between'>

              <h1 className='text-5xl '>
                  ToDoList
              </h1>

              <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>


            </header>

            <div className='b-ToDO  h-5/6'>
     
                <div className='List w-2/5 h-full border-r-4 pr-2 border-white overflow-y-auto'>

                    <div className='searchBar flex items-center gap-4'>
                      <input type="text"  placeholder='Search....' className='w-11/12 focus:outline-none font-sans px-3 py-1 rounded-md'/>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>

                    </div>
                   
                    <div className='task flex items-center gap-4  border-b-2 border-white py-2 pr-2'>
                      
                      {/* logo of the task */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" fill="#F8F8F8"/>
                      </svg>

                      <div className='info-task w-2/3'>
                        <h1 className='text-3xl font-bold'>HomeWork</h1>
                        <p className='text-l text-stone-500  font-sans'>Do exercise of math</p>
                      </div>

                      <div className='option-task flex gap-4 items-center'>

                        {/* open task */}
                        <button className='font-sans bg-ThirdColor text-white font-semibold tracking-wide px-4 py-2 rounded-md'>Open</button>

                        {/* update task */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        
                        {/* delete task */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                      </div>


                    </div>
                  
                </div>

                <div className='OpenTask'>

                </div>
            </div>
    </>
  )
}

export default ToDo