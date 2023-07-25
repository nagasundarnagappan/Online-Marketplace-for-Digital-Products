import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/AccountSlice";

export default function Products() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const user = useSelector(selectUser);

    const config = {
        headers: { Authorization: `Bearer ${user.accessToken}` }
    };

    const getProducts = async () => {
        let res = await axios.get("http://localhost:8080/products/all", config);
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