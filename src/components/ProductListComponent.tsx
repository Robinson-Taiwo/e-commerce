import React from "react";
import Image from "next/image";
// import FlashSalesCountdown from './Countdown';
// import { Button } from "./ui/button";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string; // URL for the product image
}

// Define the type for the component props
interface ProductListComponentProps {

    products: Product[];
}

const ProductListComponent: React.FC<ProductListComponentProps> = ({

    products,
}) => {
    return (
        <div>
            <section className="py-10">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">




                    {/* Product List */}
                    <div className="">
                        <div className=" grid-cols-4 grid p-4 space-y-4 place-content-center place-items-center w-full ">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 w-52 lg:w-60 bg-background transition-all duration-500 rounded-2xl overflow-hidden  cursor-pointer "
                                >
                                    <div>
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} image`}
                                            className="w-full h-48 object-cover"
                                            width={300} // Maintain explicit width
                                            height={300} // Maintain explicit height
                                            // If you want the image to fill the parent container, use the `fill` prop and wrap it in a parent div with relative positioning
                                            // fill
                                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex flex-col  justify-between   ">
                                            <h6 className="lg:font-semibold lg:text-xl   lg:leading-8 text-foreground transition-all duration-500 group-hover:text-indigo-600">
                                                {product.name}
                                            </h6>
                                            <h6 className="font-semibold text-xl leading-8 text-primary">
                                                ${product.price}
                                            </h6>
                                        </div>
                                        <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* View All Button */}
                </div>
            </section>

            <div className="  w-full flex  items-center justify-center  ">
                <div className=" self-center border-b border-b-border w-4/5  "></div>
            </div>
        </div>
    );
};

export default ProductListComponent;
