import { useEffect, useState } from "react";
import CartItems from "./CartItems";
import Navbar from "../Navbar";
import axios from "axios";

export default function Cart() {
    const [list, setList] = useState([]);
    const [subTotalPrice, setSubTotalPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [shipping, setShipping] = useState(50);
    const [totalPrice, setTotalPrice] = useState("");

    const getProductIds = async () => {
        let res = await axios.get(`http://localhost:8080/getAllProductInCart/${window.localStorage.getItem("id")}`);
        setList(res.data);

        let subTotal = 0;
        res.data.map((item: any) => {
            subTotal += item.productPrice;
        });

        setSubTotalPrice(subTotal.toFixed(2));

        let discount = (subTotal * 0.1).toFixed(2);
        setDiscount(discount);

        let total = (subTotal - discount + shipping).toFixed(2);
        setTotalPrice(total);
    }

    useEffect(() => {
        getProductIds();
    }, []);

    const handleClearCart = async () => {
        let res = await axios.get(`http://localhost:8080/clearCart/${window.localStorage.getItem("id")}`);
        if (res.data) {
            alert("Cart Cleared Successfully");
            window.location.reload();
        }
    }

    const handleCheckout = async () => {
        let res = await axios.get(`http://localhost:8080/checkout/${window.localStorage.getItem("id")}`);
        if (res.data) {
            alert("Order Placed Successfully");
            window.location.href = "/products";
        }
        else {
            alert("Something Went Wrong");
        }
    }

    return (
        <>

            <Navbar />
            <section className="bg-gray-100 h-screen py-4 sm:py-6 lg:py-8">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                    </div>

                    <div className="mx-auto mt-8 max-w-md md:mt-12">
                        <div className="rounded-3xl bg-white shadow-lg">
                            <div className="px-4 py-6 sm:px-8 sm:py-10">
                                <div className="flow-root">
                                    <ul className="-my-8">
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <CartItems props={item} key={index} />
                                                );
                                            })
                                        }
                                    </ul>
                                </div>


                                <div className="mt-6 space-y-3 border-t border-b py-8">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-400">Subtotal</p>
                                        <p className="text-lg font-semibold text-gray-900">₹{subTotalPrice}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-400">Discount</p>
                                        <p className="text-lg font-semibold text-gray-900">₹{discount}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-400">Shipping</p>
                                        <p className="text-lg font-semibold text-gray-900">₹{shipping}</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">&#8377;   </span>{totalPrice}</p>
                                </div>

                                <div className="mt-6 text-center">
                                    <button onClick={handleClearCart} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-red-500 px-6 py-4 text-lg font-semibold text-white duration-200 ease-in-out focus:shadow">
                                        Clear Cart
                                        <img src="../assets/img/delete.png" className="h-8 ml-0.25" />
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <button onClick={handleCheckout} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                        Place Order
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}