import React from 'react'
import FadeInFromLeft from '../FadeInFromLeft'

const Working = () => {
    return (

        <>
            <FadeInFromLeft>
                <div id='working' className="working text-gray-100  items-center text-center mt-96 ">
                    <h1 className='text-3xl p-3'>HOW IT WORKS</h1>
                    <h1 className='text-4xl m-4 font-bold'>Easy Steps to start SQL Query Generation with AI</h1>
                    <div className="container h-120 bg-gray-500/10 w-4xl m-auto mt-10 rounded-2xl items-center justify-center flex">
                        <ul>
                            <li className='mx-2 my-6 mb-2 p-4 bg-gray-500/15 rounded-lg text-lg text-left'>
                                <p className='font-bold'>STEP 1 - Easily Signup or Login</p>
                                <p>Begin your journey by signing up easily either through Google or manually.</p>
                            </li>
                            <li className='mx-2 my-4 p-4 bg-gray-500/15  rounded-lg text-lg text-left'>
                                <p className='font-bold' >STEP 2 -Upload Database in CSV format</p>
                                <p>Adding database file is mandatory to get queries,new SQL queries will be generated based on the given database</p>
                            </li>
                            <li className='mx-2 my-4 p-4 bg-gray-500/15 rounded-lg text-lg text-left'>
                                <p className='font-bold'>STEP 3 - Use AI assistance for Queries</p>
                                <p>Ask questions related to the given database in natural language to get correct query.Remember AI will generate response according to the question format and database</p>

                            </li>
                            <li className='mt-4 mb-5 mx-3 bg-gray-500/15 p-4 text-left'>
                                <p className='font-bold'>STEP 4 - Show AI generated response below</p>
                                <p>Scroll down to view results</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </FadeInFromLeft>
        </>
    )
}

export default Working