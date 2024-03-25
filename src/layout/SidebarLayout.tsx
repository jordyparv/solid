import React from 'react'

export default function SidebarLayout({ title, subTitle, mainContent, rightContext }: SidebarLayoutType) {
    return (
        <div className='mb-10'>

            <div className='bg-black/50 backdrop-blur sticky top-0 z-30 '>
                <h2 className="border-l-4 border-l-primary uppercase pl-2 flex text-white items-center gap-2 px-4 mx-auto max-w-7xl py-4 text-2xl font-extrabold leading-tight md:text-4xl">
                    {title && title}
                    {/* <PlayCircleIcon className='size-16 text-white/20' /> */}
                </h2>
            </div>
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-8 px-4 py-4 md:py-14 mx-auto max-w-7xl  border-b border-b-white/50 pb-20">
                <div className="w-full xl:w-5/6">
                    <div className="flex flex-col space-y-16">
                        {mainContent && mainContent}
                    </div>
                </div>
                <div className='hidden md:block space-y-4 sticky top-0'>
                    <h4 className='text-2xl mb-4  text-white/70'>
                        {/* {subTitle && subTitle} */}
                    </h4>
                    {rightContext && rightContext}
                </div>
            </section>
        </div>
    )
}

interface SidebarLayoutType {
    mainContent?: React.ReactNode;
    rightContext?: React.ReactNode;
    title: string;
    subTitle?: string
    header?: React.ReactNode
}