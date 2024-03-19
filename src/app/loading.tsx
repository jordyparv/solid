
import React from 'react'
export default function Loading() {
    let string = 'Solid'.split('')
    return (
        <div
            className='grid place-items-center z-50  absolute w-screen h-screen overflow-hidden bg-black'
            style={{ zIndex: '999' }}
        >
            <div className='overflow-hidden grid place-items-center size-full from-white/25  to-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]'>

                <h1 className='text-2xl md:text-9xl space-x-3 animate-ping uppercase pl-2 border-l-8 border-l-yellow-500'>
                    {string.map((item, idx) => <span key={item} className='inline-block animate-wiggle'
                        style={{ animationDelay: ` ${100 * idx}ms` }}
                    >{item}</span>)}
                </h1>
            </div>
        </div>
    )
}
