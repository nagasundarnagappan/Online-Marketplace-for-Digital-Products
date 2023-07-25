import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { saveDetails } from '../Redux/AccountSlice';
import { useNavigate } from "react-router-dom";

export default function Login(): any {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        type: "buyer",
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let post = {
            email: data.email,
            password: data.password
        }

        let res = await axios.post(`http://localhost:8080/auth/${data.type}/login`, post);

        if (!(res.data.status)) {
            alert(res.data.message);
            return;
        }

        alert(res.data.message);
        console.log(res.data);
        console.log(res.data.accessToken);

        let reduxDetails = {
            type: data.type,
            id: res.data.id,
            accessToken: res.data.accessToken
        }

        console.log(reduxDetails);
        dispatch(saveDetails(reduxDetails));

        navigate("/");
    }

    return (
        <>

            <div className="grid grid-cols-3 overflow-clip">
                <div className="col-span-2">
                    <img
                        className="h-screen object-cover overflow-clip"
                        src="./assets/img/login_cover.jpg"
                        alt="Your Company"
                    />
                </div>
                <div className="mt-18 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-14 w-auto"
                            src="./assets/img/package.png"
                        />
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>



                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="type"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Select Account Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="type"
                                        name="type"
                                        autoComplete="type"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="buyer">
                                            Buyer
                                        </option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{" "}
                            <a
                                href="/signup"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}