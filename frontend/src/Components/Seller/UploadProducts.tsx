import { useState } from "react";
import axios from "axios";
import 'firebase/storage';
import Navbar from "../Navbar";

export default function UploadProducts(): any {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: 0,
        category: "img"
    });

    const [file, setFile] = useState(null);

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleFile = (e: any) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // await axios.put(`https://c5jbz4fjy6.execute-api.ap-south-1.amazonaws.com/v1/mini-project-64/${data.name}.jpg`, file);

        let post = {
            productName: data.name,
            productDescription: data.description,
            productPrice: data.price,
            category: data.category,
            // fileLocation: `https://mini-project-64.s3.ap-south-1.amazonaws.com/${data.name}.jpg`,
            fileLocation: "../assets/img/placeholder.jpg",
            sellerId: window.localStorage.getItem("id")
        }

        let res = await axios.post("http://localhost:8080/product/add", post);

        if (res.data) {
            alert("Product Added Successfully");
            window.location.href = "/products";
        }
        else {
            alert("Product Addition Failed");
        }
    }

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-2 overflow-clip">
                <div className="pl-16 lg:pl-28">
                    <img
                        className="h-screen"
                        src="../assets/img/upload_cover.jpg"
                        alt="Your Company"
                    />
                </div>
                <div className="mt-18 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-14 w-auto"
                            src="../assets/img/package.png"
                        />
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Upload Product
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Product Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Description
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        autoComplete="description"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Price (In Rupees)
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        step="0.01"
                                        autoComplete="price"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Product Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        name="category"
                                        autoComplete="category"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="img">Image</option>
                                        <option value="pdf">Document</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="file"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Upload File
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={handleFile}
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
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
