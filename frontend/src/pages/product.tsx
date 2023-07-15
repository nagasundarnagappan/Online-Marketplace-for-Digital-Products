import ProductCard from "./productCard";

export default function product() {

    const list = [{ name: "hello", price: 250.2, file: "https://mini-project-64.s3.ap-south-1.amazonaws.com/up.jpg" }, { name: "hello", price: 250.2, file: "https://mini-project-64.s3.ap-south-1.amazonaws.com/up.jpg" }];

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
                {
                    list.map((item, index) => {
                        return (
                            <ProductCard props={item} key={index} />
                        );
                    })
                }
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