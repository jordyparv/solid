import React from 'react'

export default function HeaderSkeleton() {
    return (
        <div className="flex gap-2 animate-pulse">
            <div className='w-24 h-6 bg-gray-500 rounded'>
            </div>
            <div className='w-24 h-6 bg-gray-500 rounded'>
            </div>
            <div className='w-24 h-6 bg-gray-500 rounded'>
            </div>
            <div className='w-24 h-6 bg-gray-500 rounded'>
            </div>
        </div>
    )
}
