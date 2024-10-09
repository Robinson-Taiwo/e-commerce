interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface Category {
    subtitle: string;
    products: Product[];
}

const CartCategories: Category[] = [
    {
        subtitle: "Recently Viewed",
        products: [
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
                name: 'Shampoo',
                price: 45,
                description: 'Anti-Dandruff',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 5,
                name: 'Conditioner',
                price: 55,
                description: 'Smooth & Silky',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 6,
                name: 'Hair Mask',
                price: 50,
                description: 'For Damaged Hair',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        subtitle: "You May Also Like",
        products: [
            {
                id: 7,
                name: 'Body Lotion',
                price: 80,
                description: 'Moisturizing & Nourishing',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 8,
                name: 'Hair Serum',
                price: 60,
                description: 'For Shiny Hair',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 9,
                name: 'Lip Balm',
                price: 20,
                description: 'Mint flavor',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 10,
                name: 'Bath Soap',
                price: 25,
                description: 'Lavender scent',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 11,
                name: 'Deodorant',
                price: 35,
                description: 'Long-lasting',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 12,
                name: 'Face Wash',
                price: 40,
                description: 'Oil Control',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        subtitle: "Customers Also Like",
        products: [
            {
                id: 13,
                name: 'Cold Perfume',
                price: 100,
                description: 'White perfume',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 14,
                name: 'Moisturizing Cream',
                price: 50,
                description: 'Hydrating cream',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 15,
                name: 'Sunscreen',
                price: 30,
                description: 'SPF 50 sunscreen',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 16,
                name: 'Foot Cream',
                price: 60,
                description: 'For Soft Feet',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 17,
                name: 'Toner',
                price: 35,
                description: 'Refresh & Hydrate',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 18,
                name: 'Hair Oil',
                price: 70,
                description: 'Nourishing Formula',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
];

export default CartCategories;
