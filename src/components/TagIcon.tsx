import React from 'react'

export default function TagIcon({ text }: { text: string }) {
    return (
        <span className='capitalize tracking-wider bg-yellow-600 text-black font-bold p-1 text-xs mr-2 w-fit'>{text}</span>
    )
}
