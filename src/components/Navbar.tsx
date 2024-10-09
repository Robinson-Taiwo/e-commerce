"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  // CircleUserRound,
  Heart,
  Menu,
  MoveRight,
  Search,
  ShoppingCart,
  X,
} from "lucide-react"; //
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaUserCircle } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Navbar = () => {
  const navigationItems = [
    {
      // title: "Home",
      href: "/",
      description: "",
    },
    // {
    //     title: "Product",
    //     description: "Managing a small business today is already tough.",
    //     items: [
    //         {
    //             title: "Reports",
    //             href: "/reports",
    //         },
    //         {
    //             title: "Statistics",
    //             href: "/statistics",
    //         },
    //         {
    //             title: "Dashboards",
    //             href: "/dashboards",
    //         },
    //         {
    //             title: "Recordings",
    //             href: "/recordings",
    //         },
    //     ],
    // },
    {
      title: "Categories",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-screen max-w-6xl ">
        <div className=" flex justify-between w-full items-center px-6 lg:py-5 pt-4 lg:border-b">
          <div className="flex    gap-4 items-center justify-center  flex-row ">
            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden   ">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <Link href="/">
              <div className="text-2xl text-primary font-semibold">Cartify</div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row items-center text-gray-500">
            <NavigationMenu className="flex justify-start items-start">
              <NavigationMenuList className="flex justify-start gap-4 flex-row">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <>
                        <NavigationMenuLink>
                          <Button variant="ghost">{item.title}</Button>
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base">{item.title}</p>
                                <p className="text-muted-foreground text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-10">
                                Book a call today
                              </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex flex-row items-center justify-center gap-4  lg:gap-6 ">
            <div
              className={`lg:flex flex-row hidden   items-center border-border border rounded-md px-1 transition-all duration-300 ${
                isFocused ? "w-64  " : " border-none w-10"
              }`}
            >
              <Input
                type="search"
                placeholder="Search"
                className={`border-none outline-none focus:outline-none hidden focus-visible:ring-0 transition-all duration-300 ${
                  isFocused ? "w-full flex" : "w-0"
                }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              <Search
                onClick={() => setIsFocused(true)}
                className="cursor-pointer  "
              />
            </div>

            <Heart className="  w-6  hidden  h-6 cursor-pointer  " />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <FaUserCircle className="  cursor-pointer w-6  h-6 " />
                {/* <Button variant="outline">sign in</Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cart">
              <ShoppingCart className="  w-6  h-6 cursor-pointer  " />
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center py-4">
              <button className="px-6 py-2 hover:text-primary">Features</button>
              <button className="px-6 py-2 hover:text-primary">
                How it works
              </button>
              <button className="px-6 py-2 hover:text-primary">Pricing</button>
              <button className="px-6 py-2 hover:text-primary">
                Case studies
              </button>
              <Button variant="default" className="mt-4">
                Download Now
              </Button>
            </div>
          )}
        </div>
        <div  className="border-b border-b-border px-4 lg:border-none lg:hidden py-2 " >
        <div
              className={`lg:flex flex-row   items-center border-border border rounded-md px-1 transition-all duration-300 ${
                isFocused ? " flex flex-row  w-full " : " flex flex-row  w-full "
              }`}
            >
              <Input
                type="search"
                placeholder="Search"
                className={`border-none outline-none focus:outline-none hidden focus-visible:ring-0 transition-all duration-300 ${
                  isFocused ? "w-full flex" : "w-full flex"
                }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              <Search
                onClick={() => setIsFocused(true)}
                className="cursor-pointer  "
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
