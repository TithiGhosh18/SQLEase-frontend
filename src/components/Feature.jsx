import React from 'react'
import FadeInFromLeft from '../FadeInFromLeft';
import query1  from '../assets/query2.png';
const Feature = () => {
    return (
        <>
        <FadeInFromLeft>
            <div id='feature' className="features items-center text-center text-gray-100 mt-50  ">
                <h1 className="text-3xl">FEATURES</h1>
                <p className='sm:text-xl md:text-5xl md:w-4xl m-auto py-16'>From Query Designing, Refactoring to Testing: Use AI-Assistance for Peak Performance</p>
                <div className="boxes flex items-center justify-center m-auto lg:w-6xl">
                    <div className="box1 w-100 h-50 border-1 border-solid border-gray-100 rounded-lg flex p-2 m-4  text-center bg-[radial-gradient(300px_circle_at_50%_100px,#1d4652,transparent)] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out ">
                        <img src={query1} alt="logo" className='w-6 h-6 ml-1 mt-1' />
                        <div className="desc pl-3">
                            <p className='text-xl mb-4 text-left '>Craft Your Perfect Queries</p>
                            <p className='text-left items-center pt-3 text-lg'> Get SQL code tailored to your specific database and application needs. Even complex stuff like joins and data manipulation? No sweat!.</p>
                        </div>
                    </div>
                    <div className="box1 w-100 h-50 border-1 border-solid border-gray-100 rounded-lg flex p-2 m-4  text-center bg-[radial-gradient(300px_circle_at_50%_100px,#302738,transparent)] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out ">
                        <img src={query1} alt="logo" className='w-6 h-6 ml-1 mt-1' />
                        <div className="desc pl-3">
                            <p className='text-xl mb-4 text-left '>Test Smarter, Not Harder</p>
                            <p className='text-left items-center pt-3 text-lg'>Automatically test your SQL queries and see the results right away using your own databases</p>
                        </div>
                    </div>
                    <div className="box1 bg-#302738 w-100 h-50 border-1 border-solid border-gray-100 rounded-lg flex p-2 m-4  text-center bg-[radial-gradient(300px_circle_at_50%_100px,#323827,transparent)] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                        <img src={query1} alt="logo" className='w-6 h-6 ml-1 mt-1' />
                        <div className="desc pl-3">
                            <p className='text-xl mb-4 text-left'>Speak Your Database's Language (Almost!)</p>
                            <p className='text-left items-center pt-3 text-lg'>Ask questions in plain English and watch the AI work its magic. You'll get the SQL you need with results</p>
                        </div>
                    </div>
                </div>
            </div>
            </FadeInFromLeft>
        </>
    )
}

export default Feature