import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";

export default function Product() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let res = await axios.get("http://localhost:8080/product/all");
        setList(res.data);
        console.log(res.data);
    }

    return (
        <>
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