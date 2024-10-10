"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Home, Edit } from "lucide-react";
// import { FiCreditCard } from "react-icons/fi";
import BreadcrumbBar from '@/components/BreadCrumbComponent';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// Modal Component with shadcn UI components
const Modal = ({ isOpen, onClose, onSave }: {
    isOpen: boolean,
    onClose: () => void,
    onSave: (data: { name: string; email: string; homeAddress: string; deliveryAddress: string; phoneNumber: string; }) => void
}) => {
    const [formData, setFormData] = useState({
        name: 'Helene Engels',
        email: 'helene@example.com',
        homeAddress: '2 Miles Drive, NJ 071, New York',
        deliveryAddress: '9th St. PATH Station, New York',
        phoneNumber: '+1234 567 890',
    });

    // Prevent background from scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            // Add the class to disable scrolling when modal is open
            document.body.classList.add('overflow-hidden');
        } else {
            // Remove the class when modal is closed
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up by removing the class when the component is unmounted or modal is closed
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        onSave(formData); // Pass formData to onSave with the correct type
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-background  p-6 rounded-lg w-full">
                <h3 className="text-lg font-bold mb-4">Edit Profile</h3>
                <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Home Address */}
                    <div>
                        <Label htmlFor="homeAddress">Home Address</Label>
                        <Input
                            id="homeAddress"
                            type="text"
                            name="homeAddress"
                            value={formData.homeAddress}
                            onChange={handleInputChange}
                            placeholder="Home Address"
                        />
                    </div>

                    {/* Delivery Address */}
                    <div>
                        <Label htmlFor="deliveryAddress">Delivery Address</Label>
                        <Input
                            id="deliveryAddress"
                            type="text"
                            name="deliveryAddress"
                            value={formData.deliveryAddress}
                            onChange={handleInputChange}
                            placeholder="Delivery Address"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 border-border border rounded-lg mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-primary text-foreground rounded-lg"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};


const UserProfile = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        name: 'Helene Engels',
        email: 'helene@example.com',
        homeAddress: '2 Miles Drive, NJ 071, New York',
        deliveryAddress: '9th St. PATH Station, New York',
        phoneNumber: '+1234 567 890',
    });

    const handleSave = (data: { name: string; email: string; homeAddress: string; deliveryAddress: string; phoneNumber: string }) => {
        setUserProfile(data);
    };


    return (
        <div className="w-full items-center justify-center flex">
            <div className="max-w-6xl w-full p-4  ">
                <BreadcrumbBar />
                <div className="py-4 md:py-8">
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                        {/* Left Column */}
                        <div className="space-y-4  p-4 lg:p-0 ">
                            <div className="flex space-x-4">
                                <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                        alt="Helene avatar"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                        PRO Account
                                    </span>
                                    <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                                        {userProfile.name}
                                    </h2>
                                </div>
                            </div>
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">
                                    Email Address
                                </dt>
                                <dd className="text-gray-500 dark:text-gray-400">
                                    {userProfile.email}
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">
                                    Home Address
                                </dt>
                                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                    <Home className="hidden h-5 w-5 text-gray-400 dark:text-gray-500 lg:inline" />
                                    {userProfile.homeAddress}
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">
                                    Delivery Address
                                </dt>
                                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                    <Home className="hidden h-5 w-5 text-gray-400 dark:text-gray-500 lg:inline" />
                                    {userProfile.deliveryAddress}
                                </dd>
                            </dl>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4 p-4 lg:p-0 ">
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">
                                    Phone Number
                                </dt>
                                <dd className="text-gray-500 dark:text-gray-400">
                                    {userProfile.phoneNumber}
                                </dd>
                            </dl>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm text-foreground font-medium sm:w-auto"
                        onClick={() => setModalOpen(true)}
                    >
                        <Edit className="mr-1.5 h-4 w-4" />
                        Edit your data
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default UserProfile;
