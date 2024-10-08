import React from 'react'

import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';

interface Category {
    name: string;
    icon: JSX.Element;
}

const categories: Category[] = [
    {
        name: 'Phones',
        icon: <Smartphone size={48} />,
    },
    {
        name: 'Computer',
        icon: <Monitor size={48} />,
    },
    {
        name: 'Smartwatch',
        icon: <Watch size={48} />,
    },
    {
        name: 'Cameras',
        icon: <Camera size={48} />,
    },
    {
        name: 'Headphone',
        icon: <Headphones size={48} />,
    },
    {
        name: 'Gaming',
        icon: <Gamepad size={48} />,
    },
];




const Categories = () => {


    return (
        <div className=" flex flex-col w-full  "  >

            <div>
                <div className="flex flex-row items-center gap-4 font-semibold leading-6 text-primary mb-2  text-[0.8rem]">
                    <div className="w-5 h-10 lg:text-lg bg-primary rounded-sm"></div>
                    <span className='lg:text-lg' >Categories</span>
                </div>

                <div className="flex flex-row gap-10 mt-6 items-center ">

                    <h2 className="font-bold  text-2xl "  >Browse By Category
                    </h2>
                </div>
            </div>


            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="text-foreground mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-primary">
                                    {category.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Categories
