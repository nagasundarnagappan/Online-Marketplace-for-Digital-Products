import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";

export default function Profile() {

    const [details, setDetails] = useState({});
    const [products, setProducts] = useState([]);
    const [isItalic, setIsItalic] = useState(false);

    const getDetails = async () => {
        const res = await axios.get(`http://localhost:8080/get${window.localStorage.getItem("type")}/${window.localStorage.getItem("id")}`);
        setDetails(res.data);
        console.log(res.data);
        console.log(details);
    }

    const getProducts = async () => {
        const res = await axios.get(`http://localhost:8080/products/${window.localStorage.getItem("type")}/${window.localStorage.getItem("id")}`);
        setProducts(res.data);
        console.log(res.data);
        console.log(details);
    }

    useEffect(() => {
        getDetails();
        getProducts();

        const interval = setInterval(() => {
            setIsItalic((prevState) => !prevState);
        }, 350);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container py-16 mx-auto border-b-2">
                <div className={`lg:w-4/5 mx-auto ${isItalic ? "non-italic" : "italic"} text-center font-mono`}>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl">Welcome to your profile</h1>
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-5xl lg:text-6xl">{details.name}</h1>
                </div>
            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mt-10 pb-8">Your Products</h2>
                <div className="w-full mx-auto">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden ">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center">
                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    Product Id
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    Product Name
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    Category
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    Price
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    Seller Id
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                                    View Product
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            {
                                                products.map((product: any) => {
                                                    return (
                                                        <TableRow props={product} />
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TableRow(props: any) {

    const handleView = () => {
        window.localStorage.setItem("productId", props.props.productId);
        window.location.href = "/product/view";
    }

    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.props.productId}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.props.productName}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{(props.props.category === "img") ? "Image" : ""}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.props.productPrice}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.props.sellerId}</td>
            <button onClick={handleView}>
                <svg className="h-8 w-5 text-purple-500 pt-2 mt-2 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </button>
        </tr>
    );
}