"use client"

import React from 'react'
import CarouselPlugin from './Carousels'
import * as Icons from "lucide-react"; // Import all icons
import categories from './data'
// import FlashSalesCountdown from './Countdown';
import ProductList from './ProductList';
import Categories from './Categories';
import productCategories from './productData';
import ProductComponent from './ProductComponent';
import BreadcrumbBar from './BreadCrumbComponent';

// Ensure the type for the dynamic IconComponent
type LucideIcon = React.ComponentType<{ size?: number }>;

const HomePage = () => {
    return (
        <div className="flex w-full  pb-20  h-full items-center justify-center">
            <div className="max-w-6xl lg:p-8 w-full h-full">

               <BreadcrumbBar/>


                <div className="w-full items-center mt-10 flex justify-center relative gap-6 flex-row">
                    <ul className='lg:flex flex-col  hidden    gap-4'>
                        {categories.map((category) => {
                            // Dynamically get the correct icon component from the string reference
                            const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;

                            return (
                                <li key={category.id} className="category-item cursor-pointer hover:text-primary flex flex-row gap-4">
                                    {IconComponent && <IconComponent size={24} />} {/* Render the icon */}
                                    <span>{category.name}</span>
                                </li>
                            );
                        })}
                    </ul>

                    <CarouselPlugin />
                </div>

                <div className='flex flex-col  mt-20 mb-10  '  >


                    <ProductList />

                    <div className="w-full  border-b border-b-border "></div>

                </div>

                <div>
                    <Categories />
                </div>


                {productCategories.map((category, index) => (
                    <ProductComponent
                        key={index}
                        title={category.title}
                        subtitle={category.subtitle}
                        products={category.products}
                    />
                ))}

            </div>
        </div>
    );
};

export default HomePage;
