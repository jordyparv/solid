'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Selection() {
    const [show, setShow] = useState<boolean>(true)
    return (
        <>

            <div className="snap-start flex items-center justify-center min-h-screen ">
                <div className="w-full max-w-lg px-10 py-8 mx-auto">
                    <div className="max-w-md mx-auto space-y-6">
                        <div className="dropdown-menu">

                            <button
                                onClick={() => setShow(prev => !prev)}
                                className="bg-white rounded-lg  shadow-xl flex items-center  px-4 text-base w-full h-full flex-1  py-6"
                            >
                                <span className='text-black'>
                                    Select Form
                                </span>
                                <span className='ml-auto'>

                                    <svg
                                        width={20}
                                        height={10}
                                        viewBox="0 0 20 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line x1={0} y1={0} x2={10} y2={10} stroke="#9CA3AF" />
                                        <line x1={20} y1={0} x2={10} y2={10} stroke="#9CA3AF" />
                                    </svg>
                                </span>
                            </button>


                            {show &&
                                <div className="bg-white rounded-lg shadow-xl px-4 relative mt-8">
                                    <svg
                                        className="absolute bottom-full right-4"
                                        width={30}
                                        height={20}
                                        viewBox="0 0 30 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
                                    </svg>
                                    <div className="py-6 flex items-center w-full hover:animate-pulse transition-all">
                                        <Link href="#" className="flex-1">
                                            <div className="text-gray-900 font-medium text-base">Single Headline Post Form</div>
                                        </Link>
                                        <div>
                                            <svg
                                                width={40}
                                                height={20}
                                                viewBox="0 0 40 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="py-6 flex items-center w-full border-t border-gray-200 hover:animate-pulse transition-all">
                                        <Link href="#article" className="flex-1">
                                            <div className="text-gray-900 font-medium text-base">Card Post Form</div>
                                        </Link>
                                        <div>
                                            <svg
                                                width={40}
                                                height={20}
                                                viewBox="0 0 40 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="py-6 flex items-center w-full border-t border-gray-200 hover:animate-pulse transition-all">
                                        <Link href="#article" className="flex-1">
                                            <div className="text-gray-900 font-medium text-base">Article Post Form</div>
                                        </Link>
                                        <div>
                                            <svg
                                                width={40}
                                                height={20}
                                                viewBox="0 0 40 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="py-6 flex items-center w-full hover:animate-pulse transition-all border-t border-gray-200">
                                        <Link href="#article" className="flex-1">
                                            <div className="text-gray-900 font-medium text-base">Only Text Article</div>
                                        </Link>
                                        <div>
                                            <svg
                                                width={40}
                                                height={20}
                                                viewBox="0 0 40 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                                <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
