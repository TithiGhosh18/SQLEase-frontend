import React from 'react'
import FadeInFromLeft from '../FadeInFromLeft'
import IBMDB2 from '../assets/IBMDB2.png';
import MariaDB from '../assets/MariaDB.png';
import MicrosoftSQL from '../assets/Microsoft SQL Server.png';
import mySQL from '../assets/mysql.png';
import Oracle from '../assets/Oracle Database.png';
import postgreSQL from '../assets/PostgreSQL.png';
import redis from '../assets/Redis.png';
import SAP from '../assets/SAP.png';
 import SQLite from '../assets/SQLite.png';
 import amazonRDS from '../assets/Amazon RDS.png';
const Databases = () => {
    return (
        <>
        <FadeInFromLeft>
            <div className="databases md:mt-110 md:h-96 left-0 right-0 border-1 bg-[radial-gradient(1200px_circle_at_95%_400px,#221142,transparent),radial-gradient(2000px_circle_at_95%_300px,#114142,transparent)]">
                <div className="container tebg-gray-200/10 text-gray-100 md:p-4 items-center w-6xl m-auto justify-center text-center">
                    <h1 className='text-3xl'>Supports all SQL Databases</h1>

                    <div className="dbcontain p-3 mt-6">
                        <div className="db1 flex">
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-50  bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={mySQL} alt="logo" className='w-10 h-10 m-2' />
                                <h2 className='text-center items-center m-auto'>MySQL</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-50 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={postgreSQL} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>PostgreSQL</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-50 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={MicrosoftSQL} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>Microsoft SQL Server</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-50 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={Oracle} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>Oracle Database</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-50 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={SQLite} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>SQLite</h2>
                            </div>
                        </div>



                        <div className="db2 flex justify-center m-4">
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-42 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={MariaDB} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>MariaDB</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-1 rounded-xl w-42 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={IBMDB2} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>IBM DB2</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-42 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={SAP} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>SAP HANA</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-42 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={redis} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>Redis</h2>
                            </div>
                            <div className="mysql p-3 md:p-5 m-1 md:mx-2 rounded-xl w-42 bg-gray-200/10 text-gray-100 flex text-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={amazonRDS} alt="logo" className='w-10 h-10' />
                                <h2 className='text-center items-center m-auto'>Amazon RDS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </FadeInFromLeft>
        </>
    )
}

export default Databases