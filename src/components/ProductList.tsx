import React from 'react';
import Image from 'next/image';
import FlashSalesCountdown from './Countdown';
import { Button } from './ui/button';

const products = [
    {
        id: 1,
        name: 'Face cream',
        price: 100,
        description: 'Orange & Aloe Vera',
        imageUrl: '/images/banner3.png',
    },
    {
        id: 2,
        name: 'Plastic bottle',
        price: 40,
        description: 'Black color',
        imageUrl: '/images/banner3.png',
    },
    {
        id: 3,
        name: 'Men cream',
        price: 100,
        description: 'Aloe Vera and Neem',
        imageUrl: '/images/banner3.png',
    },
    {
        id: 4,
        name: 'Cold Perfume',
        price: 100,
        description: 'White perfume',
        imageUrl: '/images/banner3.png',
    },
    {
        id: 5,
        name: 'Moisturizing Cream',
        price: 50,
        description: 'Hydrating cream',
        imageUrl: '/images/banner3.png',
    },
    {
        id: 6,
        name: 'Sunscreen',
        price: 30,
        description: 'SPF 50 sunscreen',
        imageUrl: '/images/banner3.png',
    },
];

const ProductList: React.FC = () => {
    return (
        <div>
            <section className="py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row items-center gap-4 font-semibold leading-6 text-primary mb-2  text-[0.8rem]">
                        <div className="w-5 h-10 lg:text-lg bg-primary rounded-sm"></div>
                        <span className='lg:text-lg' >Today&apos;s</span>
                    </div>



                    <div className="flex flex-row  gap-2 lg:gap-10 mt-6 mb-6 items-center ">

                        <h2 className="font-bold text-sm  lg:text-2xl "  >Flash Sales</h2>
                        <FlashSalesCountdown />
                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex space-x-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    // href="javascript:void(0);"
                                    className="flex-shrink-0 w-60 bg-background transition-all duration-500 rounded-2xl overflow-hidden  cursor-pointer "
                                >
                                    <div>
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} image`}
                                            className="w-full h-48 object-cover"
                                            width={300} // Set a width (in pixels)
                                            height={300} // Set a height (in pixels)
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
                    <div className=" w-full items-center flex justify-center  " >

                        <Button>View all products</Button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
