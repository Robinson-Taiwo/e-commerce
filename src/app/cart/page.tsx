import React from 'react'
import { ArrowRight } from "lucide-react"; // or import from react-icons if preferred
import Image from "next/image";
import { Minus, Plus, Heart, X } from "lucide-react"; // or from react-icons
import CartCategories from '@/components/cartProduct';
import CartComponent from '@/components/CartComponent';



const page = () => {
    return (
        <div className='items-center w-full pb-10  flex justify-center '  >

            <div className="flex max-w-6xl w-full flex-col gap-20  ">

                <div className='  flex flex-col lg:flex-row gap-10 pt-10  w-full    '   >


                    <div className="lg:w-4/5 px-4 flex flex-col overflow-auto   lg:h-[80vh]  w-full ">
                        <div className=" sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    <div className="rounded-lg border border-border bg-background p-4 shadow-sm  md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <Image
                                                    className="h-32 w-32 dark:hidden  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={100}
                                                    height={100}
                                                />
                                                <Image
                                                    className="hidden h-32 w-32 dark:block  "
                                                    src="/images/speaker.png"
                                                    alt="Product image"
                                                    width={80}
                                                    height={80}
                                                />
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
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
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    PC system All in One APPLE iMac (2023), Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                                                </a>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        <Heart className="mr-1.5 h-5 w-5" />
                                                        Add to Favorites
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                    >
                                                        <X className="mr-1.5 h-5 w-5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="lg:w-2/6  px-8 lg:px-4  w-full ">
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-t-border bg-background p-4 shadow-sm  sm:p-6">
                                <p className="text-xl font-semibold  text-foreground">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500">Original price</dt>
                                            <dd className="text-base font-medium  text-foreground">$7,592.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                                            <dd className="text-base font-medium text-green-600">-$299.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 ">Store Pickup</dt>
                                            <dd className="text-base font-medium  text-foreground">$99</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                                            <dd className="text-base font-medium  text-foreground">$799</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-t-border pt-2 border-gray-700">
                                        <dt className="text-base font-bold  text-foreground">Total</dt>
                                        <dd className="text-base font-bold  text-foreground">$8,191.00</dd>
                                    </dl>
                                </div>

                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                                >
                                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                                </a>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 ">or</span>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline text-primary"
                                    >
                                        Continue Shopping
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

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
    )
}

export default page
