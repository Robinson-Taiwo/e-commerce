import Image from "next/image";
import { Star, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import CartComponent from "@/components/CartComponent";
import CartCategories from "@/components/cartProduct";
import BreadcrumbBar from "@/components/BreadCrumbComponent";

const ProductDetail = () => {
    return (
        <div className="w-full  flex items-center justify-center ">

            <div className="max-w-6xl w-full gap-6 flex-col  flex  ">
                <BreadcrumbBar />
                <section className="py-8 bg-background md:py-2 antialiased">
                    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <Image
                                    className="w-full dark:hidden"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                    alt="Product Image"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    className="w-full hidden dark:block"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                                    alt="Product Image Dark"
                                    width={500}
                                    height={500}
                                />
                            </div>

                            <div className="mt-6 max-w-full sm:mt-8 lg:mt-0">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                    Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                        $1,249.99
                                    </p>
                                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, index) => (
                                                <Star key={index} className="w-4 h-4 text-yellow-300" />
                                            ))}
                                        </div>
                                        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                            (5.0)
                                        </p>
                                        <a
                                            href="#"
                                            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                        >
                                            345 Reviews
                                        </a>
                                    </div>
                                </div>

                                <div className="flex mt-4 items-center justify-start md:order-3 md:justify-start">
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            id="decrement-button"
                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-border bg-background focus:outline-none focus:ring-2   "
                                        >
                                            <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                                        </button>
                                        <input
                                            type="text"
                                            id="counter-input"
                                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                            value="2"
                                            required
                                        />
                                        <button
                                            type="button"
                                            id="increment-button"
                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-border bg-background focus:outline-none focus:ring-2   "
                                        >
                                            <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                                        </button>
                                    </div>

                                </div>

                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-4">
                                    <a
                                        href="#"
                                        title="Add to favorites"
                                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-foreground  rounded-lg border border-border "
                                    >
                                        <Heart className="w-5 h-5 mr-2" />
                                        Add to favorites
                                    </a>

                                    <a
                                        href="#"
                                        title="Add to cart"
                                        className="textforeground mt-4 sm:mt-0 bg-primary font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to cart
                                    </a>
                                </div>

                                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                <p className="mb-6 text-foreground ">
                                    Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                                </p>

                                <p className="text-gray-foreground">
                                    Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <div>


                    {CartCategories.map((category, index) => (
                        <CartComponent
                            key={index}
                            subtitle={category.subtitle}
                            products={category.products}
                        />
                    ))}


                </div>


            </div>

        </div>
    );
};

export default ProductDetail;
