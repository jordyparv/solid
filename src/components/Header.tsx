'use client'
import { getCategories } from '@/controller/getData';
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import HeaderSkeleton from './skeletons/HeaderSkeleton';

export default function Header() {
    const [isClicked, setIsClicked] = useState<Boolean>(false)
    const [show, setShow] = useState<Boolean>(false)
    const [subNavMenuData, setSubMenuData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            setShow(window.innerWidth > 768);
        };
        handleResize();
        getCategory();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const getCategory = async () => {
        try {
            setIsLoading(true)

            const { data } = await getCategories({ serverSide: false })
            setSubMenuData(data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(error)
        }
    }
    const SubNavItem = ({ name, slug }: { name: string, slug: string }) => {
        return <li className='whitespace-nowrap p-2 hover:text-primary capitalize'><Link href={`/category/${slug}`} className='block p-2'>{name && name}</Link></li>
    }
    const NavItem = () => {
        return <ul className='hidden md:flex gap-5 flex-col md:flex-row z-50'
            style={{ display: show ? 'flex' : 'none' }
            }
        >
            <li className='hover:text-primary font-medium'><Link href='/'>Home</Link></li>
            <li className='relative hover:text-primary font-medium block'>
                <button
                    onClick={() => setIsClicked(prev => !prev)}
                    className='flex gap-2 items-center w-full justify-between'
                >
                    <span>
                        Category
                    </span>
                    <ChevronDownIcon className={`size-4 transition-all text-white ${isClicked ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isClicked
                    &&
                    <ul className='mt-2 h-96 overflow-y-auto overflow-x-hidden mx-2  md:mt-0 md:mx-0 rounded-lg text-white space-y-1 md:absolute top-14 md:border border-gray-800 z-50 md:bg-black/80'
                    >
                        {subNavMenuData?.length > 0 && subNavMenuData.map((item: any) =>
                            <SubNavItem name={item?.name} slug={item?.slug} key={item?._id} />)}
                    </ul>
                }
            </li>
            <li className='hover:text-primary font-medium capitalize'><Link href='/news' className='w-full block'>News</Link></li>
            <li className='hover:text-primary font-medium capitalize'><Link href='/blogs' className='w-full block'>Blogs</Link></li>
            <li className='hover:text-primary font-medium capitalize'><Link href='/about' className='w-full block'>About</Link></li>
            <li className='hover:text-primary font-medium capitalize'><Link href='/search' className='w-full block'>Search</Link></li>
            {/* <li className='hover:text-primary font-medium capitalize'><Link href='/contact-us' className='w-full block'>Contact Us</Link></li> */}
        </ul>

    }
    return (
        <header className="sticky top-0 border-b border-b-gray-900 bg-black/30 backdrop-blur-lg z-50 ">
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsClicked(false)
                }}
            >
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center justify-between p-4 mx-auto max-w-7xl">
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <p className='text-2xl md:text-4xl font-extrabold border-l-8 border-l-yellow-500 pl-2'>SOLID</p>
                        </Link>
                        <button className='md:hidden'
                            onClick={() => setShow(prev => !prev)}
                        >
                            <Bars3Icon className='size-8 text-white' />
                        </button>
                    </div>
                    {isLoading ? <HeaderSkeleton /> : <NavItem />}

                </div>
            </OutsideClickHandler >
        </header >
    )
}


