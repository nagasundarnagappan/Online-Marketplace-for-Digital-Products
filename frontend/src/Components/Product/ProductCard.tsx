export default function ProductCard(props: any) {

    const handleClick = () => {
        window.localStorage.setItem("productId", props.props.productId);
        window.location.href = "./product/view";
    }

    return (
        <>
            <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={props.props.fileLocation} alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{props.props.productName}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">₹{props.props.productPrice}</span>
                            {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                        </p>
                    </div>
                    <a onClick={handleClick} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        View Product
                    </a>
                </div>
            </div>
        </>
    );

}