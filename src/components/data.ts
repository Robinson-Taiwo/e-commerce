// import {
//     Home,
//     Smartphone,
//     Heart,
//     ShoppingCart,
//     Monitor,
//     Tag,
//     Cpu,
//     Smile,
//     Gamepad2,
//     Music,
//     MoreHorizontal,
//   } from "lucide-react";
  
  interface Category {
    id: number;
    name: string;
    icon: string; // Store the icon component name as a string
  }
  
  // Store the icon's component name as a string reference
  const categories: Category[] = [
    { id: 1, name: "Appliances", icon: "Home" },
    { id: 2, name: "Phones & Tablets", icon: "Smartphone" },
    // { id: 3, name: "Health & Beauty", icon: "Heart" },
    // { id: 4, name: "Home & Office", icon: "Home" },
    { id: 5, name: "Electronics", icon: "Monitor" },
    { id: 6, name: "Fashion", icon: "Tag" },
    { id: 7, name: "Supermarket", icon: "ShoppingCart" },
    { id: 8, name: "Computing", icon: "Cpu" },
    // { id: 9, name: "Baby Products", icon: "Smile" },
    { id: 10, name: "Gaming", icon: "Gamepad2" },
    { id: 11, name: "Musical Instruments", icon: "Music" },
    { id: 12, name: "Other categories", icon: "MoreHorizontal" },
  ];
  
  export default categories;
  