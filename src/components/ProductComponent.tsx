import React from 'react';
import Image from 'next/image';
// import FlashSalesCountdown from './Countdown';
import { Button } from './ui/button';


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string; // URL for the product image
}

// Define the type for the component props
interface ProductComponentProps {
    title: string;
    subtitle: string;
    products: Product[];
}

const ProductComponent: React.FC<ProductComponentProps> = ({ title, subtitle, products }) => {
    return (
        <div>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <div>
                        <div className='flex flex-row w-full justify-between '  >
                            <div className="flex flex-row items-center gap-4 font-semibold leading-6 text-primary mb-2 text-[0.8rem]">
                                <div className="w-5 h-10 lg:text-lg bg-primary rounded-sm"></div>
                                <span className='lg:text-lg'>{title}</span> {/* Dynamically pass title */}
                            </div>


                            <Button>See all</Button>
                        </div>

                    </div>


                    {/* Subtitle and Flash Sales */}
                    <div className="flex flex-row gap-10 mt-6 mb-6 items-center ">
                        <h2 className="font-bold text-2xl">{subtitle}</h2> {/* Dynamically pass subtitle */}
                        {/* <FlashSalesCountdown /> */}
                    </div>

                    {/* Product List */}
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 w-60 bg-background transition-all duration-500 rounded-2xl overflow-hidden  cursor-pointer "
                                >
                                    <div>
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} image`}
                                            className="w-full h-48 object-cover"
                                            width={300}  // Maintain explicit width
                                            height={300} // Maintain explicit height
                                            // If you want the image to fill the parent container, use the `fill` prop and wrap it in a parent div with relative positioning
                                            // fill
                                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <h6 className="font-semibold text-xl leading-8 text-foreground transition-all duration-500 group-hover:text-indigo-600">
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
        </div>
    );
};

export default ProductComponent;
