import React from 'react'

export default function SidebarLayout({ title, subTitle, leftContent, rightContext }: SidebarLayoutType) {
    return (
        <div className='mb-10'>
            <div className='bg-black/50 backdrop-blur sticky top-0 z-50 '>
                <h2 className="border-l-4 border-l-yellow-500 pl-2 flex text-white/80 items-center gap-2 px-4 mx-auto max-w-7xl py-4 text-2xl font-extrabold leading-tight md:text-4xl">
                    {title && title}
                    {/* <PlayCircleIcon className='size-16 text-white/20' /> */}
                </h2>
            </div>
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-8 px-4 py-4 md:py-14 mx-auto max-w-7xl  border-b border-b-white/50 pb-20">
                <div className="w-full xl:w-5/6">
                    <div className="flex flex-col space-y-16">
                        {leftContent && leftContent}
                    </div>
                    {/* <div className="pt-10 mt-10 border-t border-slate-900">
                        <a href="/#" className="w-full border border-yellow-500 p-3 hover:bg-yellow-500 hover:text-black transition-all md:w-auto">
                            Load More
                        </a>
                    </div> */}

                </div>
                <div className='hidden md:block space-y-4'>
                    <h4 className='text-2xl mb-4  text-white/70'>
                        {subTitle && subTitle}
                    </h4>
                    {rightContext && rightContext}
                </div>
            </section>
        </div>
    )
}

interface SidebarLayoutType {
    leftContent: React.ReactNode;
    rightContext?: React.ReactNode;
    title: string;
    subTitle?: string
}