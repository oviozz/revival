
import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20 mb-12 text-center">
                <h1 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Forgot password?
                </h1>

                <h2 className={"text-md mt-2"}>
                    Remember your password?
                    <Link
                        to={"/signin"}
                        className={"ml-1 font-semibold text-green-700 hover:text-green-950"}
                    >
                        Sign in here
                    </Link>
                </h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-logoBlue px-3 py-1.5 h-10 text-md font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Reset password
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
