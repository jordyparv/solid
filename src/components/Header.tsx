'use client'
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
export default function Header() {
    const [isClicked, setIsClicked] = useState<Boolean>(false)
    const [show, setShow] = useState<Boolean>(false)
    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth > 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="sticky top-0 border-b border-b-gray-900 bg-black/30 backdrop-blur-lg z-50 ">
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsClicked(false)
                }}
            >
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center justify-between p-4 mx-auto max-w-7xl">
                    <div className='flex justify-between items-center'>
                        <a href='/'>
                            <p className='text-2xl md:text-4xl font-extrabold border-l-4 border-l-yellow-500 pl-2'>SOLID</p>
                        </a>
                        <button className='md:hidden'
                            onClick={() => setShow(prev => !prev)}
                        >
                            <Bars3Icon className='size-8 text-white' />
                        </button>
                    </div>
                    <ul className='hidden md:flex gap-5 flex-col md:flex-row'
                        style={{ display: show ? 'flex' : 'none' }}
                    >
                        <li className='hover:text-yellow-500 font-medium'><a href='/#'>Home</a></li>
                        <li className='relative hover:text-yellow-500 font-medium block'>
                            <button
                                onClick={() => setIsClicked(prev => !prev)}
                                className='flex gap-2 items-center w-full justify-between'
                            >
                                <span>
                                    Category
                                </span>
                                <ChevronDownIcon className='size-4 text-white' />
                            </button>
                            {isClicked
                                &&
                                <ul className='mt-2 mx-2 md:mt-0 md:mx-0 rounded text-white space-y-1 md:absolute top-14 md:border border-gray-900 z-50 md:bg-black/80'
                                >
                                    <li className='whitespace-nowrap p-2 hover:text-yellow-500'><a href='#' className=''>Category 1</a></li>
                                    <li className='whitespace-nowrap p-2 hover:text-yellow-500'><a href='#' className=''>Category 2</a></li>
                                    <li className='whitespace-nowrap p-2 hover:text-yellow-500'><a href='#' className=''>Category 3</a></li>

                                </ul>
                            }
                        </li>

                        <li className='hover:text-yellow-500 font-medium'><a href='/#' className='w-full block'>News</a></li>
                        <li className='hover:text-yellow-500 font-medium'><a href='/#' className='w-full block'>Blogs</a></li>
                        <li className='hover:text-yellow-500 font-medium'><a href='/#' className='w-full block'>About</a></li>
                        <li className='hover:text-yellow-500 font-medium'><a href='/#' className='w-full block'>Contact Us</a></li>
                    </ul>
                </div>
            </OutsideClickHandler >
        </header >
    )
}
