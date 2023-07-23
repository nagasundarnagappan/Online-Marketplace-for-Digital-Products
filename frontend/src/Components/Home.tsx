import Navbar from "./Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1>Type : {window.localStorage.getItem("type")}</h1>
            <h1>ID : {window.localStorage.getItem("id")}</h1>
        </>
    );
}