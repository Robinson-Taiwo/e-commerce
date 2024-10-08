interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface Category {
    title: string;
    subtitle: string;
    products: Product[];
}

const productCategories: Category[] = [
    {
        title: "This Month",
        subtitle: "Best Sellers",
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
                name: 'Body Lotion',
                price: 80,
                description: 'Moisturizing & Nourishing',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 5,
                name: 'Hair Serum',
                price: 60,
                description: 'For Shiny Hair',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 6,
                name: 'Lip Balm',
                price: 20,
                description: 'Mint flavor',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        title: "Last Month",
        subtitle: "Best Sellers",
        products: [
            {
                id: 7,
                name: 'Cold Perfume',
                price: 100,
                description: 'White perfume',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 8,
                name: 'Moisturizing Cream',
                price: 50,
                description: 'Hydrating cream',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 9,
                name: 'Sunscreen',
                price: 30,
                description: 'SPF 50 sunscreen',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 10,
                name: 'Hand Sanitizer',
                price: 15,
                description: 'Kills 99.9% germs',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 11,
                name: 'Shampoo',
                price: 45,
                description: 'Anti-Dandruff',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 12,
                name: 'Conditioner',
                price: 55,
                description: 'Smooth & Silky',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        title: "Promo",
        subtitle: "Promotional Products",
        products: [
            {
                id: 13,
                name: 'Face cream',
                price: 100,
                description: 'Orange & Aloe Vera',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 14,
                name: 'Plastic bottle',
                price: 40,
                description: 'Black color',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 15,
                name: 'Men cream',
                price: 100,
                description: 'Aloe Vera and Neem',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 16,
                name: 'Bath Soap',
                price: 25,
                description: 'Lavender scent',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 17,
                name: 'Deodorant',
                price: 35,
                description: 'Long-lasting',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 18,
                name: 'Face Wash',
                price: 40,
                description: 'Oil Control',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        title: "New Arrivals",
        subtitle: "Explore Our Latest Products",
        products: [
            {
                id: 19,
                name: 'Cold Perfume',
                price: 100,
                description: 'White perfume',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 20,
                name: 'Moisturizing Cream',
                price: 50,
                description: 'Hydrating cream',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 21,
                name: 'Sunscreen',
                price: 30,
                description: 'SPF 50 sunscreen',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 22,
                name: 'Foot Cream',
                price: 60,
                description: 'For Soft Feet',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 23,
                name: 'Toner',
                price: 35,
                description: 'Refresh & Hydrate',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 24,
                name: 'Hair Oil',
                price: 70,
                description: 'Nourishing Formula',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        title: "Trending",
        subtitle: "Products Everyone Is Talking About",
        products: [
            {
                id: 25,
                name: 'Face cream',
                price: 100,
                description: 'Orange & Aloe Vera',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 26,
                name: 'Plastic bottle',
                price: 40,
                description: 'Black color',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 27,
                name: 'Men cream',
                price: 100,
                description: 'Aloe Vera and Neem',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 28,
                name: 'Lip Gloss',
                price: 20,
                description: 'Rose tint',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 29,
                name: 'Hair Mask',
                price: 50,
                description: 'For Damaged Hair',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 30,
                name: 'Eye Cream',
                price: 90,
                description: 'Anti-Wrinkle Formula',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
    {
        title: "Clearance Sale",
        subtitle: "Grab Them Before They're Gone!",
        products: [
            {
                id: 31,
                name: 'Cold Perfume',
                price: 100,
                description: 'White perfume',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 32,
                name: 'Moisturizing Cream',
                price: 50,
                description: 'Hydrating cream',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 33,
                name: 'Sunscreen',
                price: 30,
                description: 'SPF 50 sunscreen',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 34,
                name: 'Body Mist',
                price: 45,
                description: 'Citrus Scent',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 35,
                name: 'Shaving Cream',
                price: 25,
                description: 'Smooth Shave',
                imageUrl: '/images/banner3.png',
            },
            {
                id: 36,
                name: 'Nail Polish',
                price: 20,
                description: 'Red Color',
                imageUrl: '/images/banner3.png',
            },
        ],
    },
];

export default productCategories;
