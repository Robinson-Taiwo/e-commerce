import React from 'react'
// import Image from "next/image";
// import { Input, Label } from 'shadcn-ui';

// import { Mail, User, Globe, City } from 'lucide-react'; // importing icons from lucide

import CartCategories from '@/components/cartProduct';
import CartComponent from '@/components/CartComponent';
import BreadcrumbBar from '@/components/BreadCrumbComponent';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const Checkout = () => {


    return (
        <div className='items-center w-full pb-10  flex justify-center '  >

            <div className="flex max-w-6xl  w-full flex-col   ">
                <BreadcrumbBar />

                <div className='mb-20  flex flex-col lg:flex-row gap-10   w-full '   >


                    <div className="lg:w-4/5 px-4 py-0 flex flex-col overflow-auto   lg:h-[80vh]  w-full ">

                        <div className="space-y-4">



                            <h2 className="text-xl font-semibold text-foreground ">
                                Delivery Details
                            </h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {/* Name Input */}
                                <div>
                                    <Label htmlFor="your_name" className="block text-sm font-medium text-foreground  mb-2">
                                        Your name
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            id="your_name"
                                            placeholder="Bonnie Green"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <Label htmlFor="your_email" className="block text-sm font-medium text-foreground  mb-2">
                                        Your email*
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="email"
                                            id="your_email"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Country Input (Text) */}
                                <div>
                                    <Label htmlFor="your_country" className="block text-sm font-medium text-foreground  mb-2">
                                        Country*
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            id="your_country"
                                            placeholder="Enter your country"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* City Input (Text) */}
                                <div>
                                    <div>
                                        <Label htmlFor="region" className="block text-sm font-medium text-foreground  mb-2">
                                            City*
                                        </Label>
                                        <div className="flex items-center gap-2">
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select your region" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Regions</SelectLabel>
                                                        <SelectItem value="north">North</SelectItem>
                                                        <SelectItem value="south">South</SelectItem>
                                                        <SelectItem value="east">East</SelectItem>
                                                        <SelectItem value="west">West</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>


                                {/* Region Select */}
                                <div>
                                    <Label htmlFor="region" className="block text-sm font-medium text-foreground  mb-2">
                                        Region*
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Select>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Select your region" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Regions</SelectLabel>
                                                    <SelectItem value="north">North</SelectItem>
                                                    <SelectItem value="south">South</SelectItem>
                                                    <SelectItem value="east">East</SelectItem>
                                                    <SelectItem value="west">West</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Additional Information Input */}
                                <div>
                                    <Label htmlFor="additional_info" className="block text-sm font-medium text-foreground  mb-2">
                                        Additional Information
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            id="additional_info"
                                            placeholder="Any additional information"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number Input */}
                                <div>
                                    <Label htmlFor="phone-input" className="block text-sm font-medium text-foreground  mb-2">
                                        Phone Number*
                                    </Label>
                                    <div className="flex items-center">
                                        <Input
                                            id="phone-input"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="rounded-r-lg"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Additional Phone Number Input */}
                                <div>
                                    <Label htmlFor="additional_phone" className="block text-sm font-medium text-foreground  mb-2">
                                        Additional Phone Number
                                    </Label>
                                    <div className="flex items-center">
                                        <Input
                                            id="additional_phone"
                                            type="tel"
                                            placeholder="Enter additional phone number"
                                            className="rounded-r-lg"
                                        />
                                    </div>
                                </div>


                            </div>


                        </div>


                        <div className="space-y-4  mt-10 ">

                            {/* Voucher Section */}
                            <div>
                                <Label htmlFor="voucher" className="mb-2 block text-sm font-medium text-foreground "> Enter a gift card, voucher or promotional code </Label>
                                <div className="flex max-w-md items-center gap-4">
                                    <Input
                                        type="text"
                                        id="voucher"
                                        className="block w-full rounded-lg border border-border bg-background p-2.5 text-sm text-foreground focus:border-primary "
                                        placeholder=""
                                        required
                                    />
                                    <Button className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-foreground">Apply</Button>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className="lg:w-2/6  px-8 lg:px-4  w-full ">
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                                <div className="flow-root">
                                    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                        {/* Subtotal */}
                                        <dl className="flex items-center justify-between gap-4 py-3">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                            <dd className="text-base font-medium text-foreground ">$8,094.00</dd>
                                        </dl>

                                        {/* Savings */}
                                        <dl className="flex items-center justify-between gap-4 py-3">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">0</dd>
                                        </dl>

                                        {/* Store Pickup */}
                                        <dl className="flex items-center justify-between gap-4 py-3">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-foreground ">$99</dd>
                                        </dl>

                                        {/* Tax */}
                                        <dl className="flex items-center justify-between gap-4 py-3">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-foreground ">$199</dd>
                                        </dl>

                                        {/* Total */}
                                        <dl className="flex items-center justify-between gap-4 py-3">
                                            <dt className="text-base font-bold text-foreground ">Total</dt>
                                            <dd className="text-base font-bold text-foreground ">$8,392.00</dd>
                                        </dl>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {/* Proceed to Payment */}
                                    <Button className="hover:bg-primary"  >

                                        <Link href="/cart/payment" className="w-full  bg-primary ">
                                            Proceed to Payment
                                        </Link>
                                    </Button>

                                    {/* Account Notice */}
                                    <p className="text-sm font-normal text-foreground ">
                                        One or more items in your cart require an account.{' '}
                                        <Link href="#" >
                                            <p className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                                Sign in or create an account now.
                                            </p>
                                        </Link>
                                    </p>
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

export default Checkout
