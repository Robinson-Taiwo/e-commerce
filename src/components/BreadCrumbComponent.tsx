"use client";

import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ecommerceRoutes } from "@/lib/utils/constants";
import Link from "next/link";

export default function BreadcrumbBar() {
    const activeRoute = usePathname(); // Get the current route path
    const routeParts = activeRoute.split("/").filter(Boolean); // Break down the path into segments

    // Map over each segment to generate breadcrumb items
    const breadcrumbItems = routeParts.map((part, index) => {
        const href = `/${routeParts.slice(0, index + 1).join("/")}`; // Generate URL for each part
        const route = ecommerceRoutes.find((route) => route.href === href); // Find the matching route in the predefined list

        return {
            href,
            name: route ? route.name : part.charAt(0).toUpperCase() + part.slice(1), // Fallback to capitalizing if route is not found
        };
    });

    return (
        <div className=" px-8 pt-8 py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {/* Ensure "Home" is always the first breadcrumb */}
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                        {breadcrumbItems.length > 0 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>

                    {/* Map over the rest of the route parts */}
                    {breadcrumbItems.map((item, index) => (
                        <BreadcrumbItem key={item.href}>
                            {index < breadcrumbItems.length - 1 ? (
                                <>
                                    <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                <BreadcrumbLink>{item.name}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            {/* Display the current page name */}
            {breadcrumbItems.length > 0 && (
                <h3 className="text-2xl pt-4 font-bold mt-2">
                    {breadcrumbItems[breadcrumbItems.length - 1].name}
                </h3>
            )}
        </div>
    );
}
