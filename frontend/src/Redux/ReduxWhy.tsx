import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ReduxWhy() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/buyer/cart");
    }, []);

    return (<></>);
}