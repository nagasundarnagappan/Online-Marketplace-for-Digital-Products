import { selectUser } from "../../Redux/AccountSlice";
import { useSelector } from "react-redux";

export default function SellerHome() {
    const user: any = useSelector(selectUser);

    <>
        <h1>Seller Home</h1>
        <h2>{user.type}</h2>
    </>
}