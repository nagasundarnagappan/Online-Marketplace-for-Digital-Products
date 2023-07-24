import axios from "axios";
import { useState } from "react";

export default function Feedback() {

    const [feedback, setFeedback] = useState({
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:8090/feedback/add", feedback);

        if (res.data) {
            alert("Feedback submitted successfully!");
        } else {
            alert("Feedback submission failed!");
        }
    }

    return (
        <div className="bg-gray-300 text-black py-20 h-screen pl-40">
            <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
                <div className="flex flex-col w-full lg:w-1/3 p-8 pt-20">
                    <p className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text text-xl uppercase tracking-loose font-bold">Feedback & Queries</p>
                    <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Leave us your thoughts!</p>
                </div>
                <div className="flex flex-col w-full lg:w-2/3 justify-center">
                    <div className="container w-full px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <form id="feedbackForm">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                                    Email
                                                </label>
                                                <input type="email" name="email" id="email" onChange={handleChange} className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" " required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                                    Message
                                                </label>
                                                <textarea name="feedback" id="feedback" onChange={handleChange} className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full" placeholder="" required></textarea>
                                            </div>
                                            <div className="text-center mt-6">
                                                <button id="feedbackBtn"
                                                    onClick={handleSubmit}
                                                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-center mx-auto text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit">Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}