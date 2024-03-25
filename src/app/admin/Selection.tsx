import Link from 'next/link'
import React from 'react'

export default function Selection() {
    return (
        <>
            <div className="px-2 py-8 mx-auto fixed w-screen bg-black/50 backdrop-blur top-0 left-0 pt-10">
                <div className="mt-10">
                    <div className="flex items-center justify-center gap-4">
                        <Link href='#article' className='border border-primary px-4 py-2 rounded uppercase hover:bg-primary hover:text-gray-900'>Article</Link>
                        <Link href='#category' className='border border-primary px-4 py-2 rounded uppercase hover:bg-primary hover:text-gray-900'>Category</Link>
                        {/* <Link href='#article'>Article</Link> */}
                    </div>
                </div>
            </div >
        </>

    )
}
