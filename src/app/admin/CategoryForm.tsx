import { postCategory } from '@/controller/postData'
import React from 'react'



export default function CategoryForm() {
    async function postData(formData: FormData) {
        'use server'
        const categoryName = {
            name: formData.get('category')?.toString().trim(),
            description: formData.get('description')?.toString().trim(),
        }
        try {
            const data = await postCategory(categoryName)
            if (data) {
                alert(data);
                console.log(data)
            }
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div id='category' className='h-screen overflow-y-auto py-14 snap-start max-w-7xl mx-auto '>
            <div className="flex items-center justify-center p-12 mt-20">
                <div className="mx-auto w-full max-w-[800px]">
                    <form action={postData} className='grid grid-cols-1 gap-4'>

                        <div className="">
                            <label
                                htmlFor="category"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Category Name
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="category"
                                required
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="description"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Category Description
                            </label>
                            <textarea
                                rows={3}
                                name="description"
                                id="description"
                                placeholder="description"
                                required
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className='space-x-4'>
                            <button className="hover:shadow-form rounded-md bg-primary hover:bg-yellow-600 py-3 px-8 text-base font-semibold text-white outline-none"
                                type='submit'

                            >
                                Submit
                            </button>
                            <button className="hover:shadow-form rounded-md bg-black/50 hover:bg-black/60 py-3 px-8 text-base font-semibold text-white outline-none"
                                type='reset'
                            >
                                Reset
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
