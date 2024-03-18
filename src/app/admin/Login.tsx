import React from 'react'

export default function Login() {
    return (
        <section className=" bg-[url(https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
            <div className="px-0 py-20 min-h-screen w-full grid place-items-center mx-auto sm:px-4 backdrop-blur-2xl bg-black/50">
                <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
                    <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
                        Log in to your account
                    </h1>
                    <form className="mb-8 space-y-4">
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">
                                Your Email
                            </span>
                            <input
                                className="form-input"
                                type="email"
                                placeholder="Ex. james@bond.com"
                                inputMode="email"

                            />
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-xs font-medium text-gray-700">
                                Your Password
                            </span>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="••••••••"

                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full py-3 mt-1 btn bg-yellow-500"
                        >
                            Login
                        </button>
                    </form>

                </div>

            </div>
        </section>

    )
}
