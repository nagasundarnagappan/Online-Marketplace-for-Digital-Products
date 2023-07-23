import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Navbar from "../Navbar";

export default function Products() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let res = await axios.get("http://localhost:8080/products/all");
        setList(res.data);
        console.log(res.data);
    }

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-4 gap-4">
                {
                    list.map((item, index) => {
                        return (
                            <ProductCard props={item} key={index} />
                        );
                    })
                }
            </div>
        </>
    );
}