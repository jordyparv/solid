import Header from '@/components/Header'
import React from 'react'

export default function page() {
    return (
        <>
            <Header />
            <div className="container mx-auto flex justify-center items-center px-4 md:px-10">
                <div className="px-3 md:px-4 py-4 flex flex-col justify-center items-center">
                    <h1 className='text-white uppercase mt-4 md:mt-12 text-2xl md:text-7xl font-extrabold leading-10 text-center  md:w-9/12 lg:w-7/12'>
                        <span className='border-l-8 pl-2 border-l-primary'>
                            Solid
                        </span>
                    </h1>
                    <p className='mt-4 text-white/90 text-base leading-normal text-center md:w-9/12 lg:w-7/12 '>Welcome to your one-stop source for informative news and engaging articles! Our mission is to provide you with high-quality content that keeps you informed, educated, and entertained.

                        We cover a wide range of topics, from current events and breaking news to in-depth analysis and thought-provoking features. Our team of dedicated writers and editors is committed to bringing you the latest information in a clear, concise, and engaging way.</p>
                    <h1 className="mt-4 text-primary md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center  md:w-9/12 lg:w-7/12 ">
                        Why Choose Us?
                    </h1>
                    <p className='mt-4  text-white/90 text-base leading-normal text-center md:w-9/12 lg:w-7/12 '>

                        Credibility and Trust: We understand the importance of reliable information in today's fast-paced world. We fact-check all of our content and source our information from reputable publications and experts.
                        Diversity of Content: We offer a variety of content to cater to different interests. Whether you're looking for the latest headlines, insightful analysis, or interesting features, you'll find it here.
                        Engaging Writing: Our team of skilled writers knows how to capture your attention and keep you coming back for more.

                    </p>
                    <h3 className='mt-4 md:mt-12 text-primary text-3xl lg:text-4xl font-semibold leading-10 text-center   md:w-9/12 lg:w-7/12 '>Stay Connected</h3>
                    <p className="mt-4 text-white/90 text-base leading-normal text-center md:w-9/12 lg:w-7/12">
                        We encourage you to explore our website and discover the wealth of information we have to offer. If you have any questions or feedback, please don't hesitate to contact us at <a href='mailto:parrishstyle77@gmail.com' className='text-primary'>parrishstyle77@gmail.com</a>

                        We're always looking for ways to improve, so your input is valuable to us.

                        Thank you for choosing us as your trusted source for news and articles!
                    </p>
                </div>
            </div>
        </>
    )
}
