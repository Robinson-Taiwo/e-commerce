// Define a Product type with additional fields
export interface Product {
    reviews: number;
    deliveryInfo: string;
    tag: string;
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;      // Product category
    stock: number;         // Available stock
    rating: number;        // Product rating (e.g., out of 5)
    discount?: number;     // Optional discount percentage
  }
  
  
  // Array of products with additional fields
export const products: Product[] = [
    {
        id: 1,
        name: 'Cold Perfume',
        price: 100,
        imageUrl: '/images/jbl.png',
        category: 'Fragrance',
        stock: 50,
        rating: 4.5,
        discount: 10,
        reviews: 455,
        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 2,
        name: 'Moisturizing Cream',
        price: 50,
        imageUrl: '/images/jbl.png',
        category: 'Skincare',
        stock: 100,
        rating: 4.7,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 3,
        name: 'Sunscreen',
        price: 30,
        imageUrl: '/images/jbl.png',
        category: 'Skincare',
        stock: 200,
        rating: 4.3,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 4,
        name: 'Foot Cream',
        price: 60,
        imageUrl: '/images/jbl.png',
        category: 'Body Care',
        stock: 80,
        rating: 4.2,
        discount: 15,
        reviews: 455,
        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 5,
        name: 'Toner',
        price: 35,
        imageUrl: '/images/jbl.png',
        category: 'Skincare',
        stock: 150,
        rating: 4.4,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 6,
        name: 'Hair Oil',
        price: 70,
        imageUrl: '/images/jbl.png',
        category: 'Haircare',
        stock: 90,
        rating: 4.6,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 7,
        name: 'Shampoo',
        price: 40,
        imageUrl: '/images/jbl.png',
        category: 'Haircare',
        stock: 120,
        rating: 4.1,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 8,
        name: 'Body Lotion',
        price: 55,
        imageUrl: '/images/jbl.png',
        category: 'Body Care',
        stock: 70,
        rating: 4.8,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 9,
        name: 'Hand Sanitizer',
        price: 15,
        imageUrl: '/images/jbl.png',
        category: 'Hygiene',
        stock: 300,
        rating: 4.9,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 10,
        name: 'Face Wash',
        price: 35,
        imageUrl: '/images/jbl.png',
        category: 'Skincare',
        stock: 180,
        rating: 4.2,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
    {
        id: 11,
        name: 'Lip Balm',
        price: 10,
        imageUrl: '/images/jbl.png',
        category: 'Skincare',
        stock: 250,
        rating: 4.6,
        reviews: 455,
                discount: 10,

        deliveryInfo: "Fast Delivery",
        tag: "Best Tag"
    },
      {
          id: 12,
          name: 'Body Spray',
          price: 25,
          imageUrl: '/images/jbl.png',
          category: 'Fragrance',
          stock: 150,
          rating: 4.3,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 13,
          name: 'Face Scrub',
          price: 45,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 100,
          rating: 4.5,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 14,
          name: 'Makeup Remover',
          price: 35,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 80,
          rating: 4.2,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 15,
          name: 'Aftershave Lotion',
          price: 55,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 60,
          rating: 4.1,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 16,
          name: 'Deodorant',
          price: 20,
          imageUrl: '/images/jbl.png',
          category: 'Fragrance',
          stock: 120,
          rating: 4.4,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 17,
          name: 'Shaving Cream',
          price: 25,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 150,
          rating: 4.3,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 18,
          name: 'Face Mask',
          price: 40,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 180,
          rating: 4.7,
          discount: 10,
          reviews: 455,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"      

      },
      {
          id: 19,
          name: 'Serum',
          price: 80,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 90,
          rating: 4.8,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 20,
          name: 'Bath Salt',
          price: 50,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 110,
          rating: 4.6,
          discount: 5,
          reviews: 455,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 21,
          name: 'Eye Cream',
          price: 90,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 70,
          rating: 4.9,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 22,
          name: 'Nail Polish',
          price: 15,
          imageUrl: '/images/jbl.png',
          category: 'Cosmetics',
          stock: 300,
          rating: 4.5,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 23,
          name: 'Body Scrub',
          price: 45,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 90,
          rating: 4.4,
          discount: 10,
          reviews: 455,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 24,
          name: 'Hair Mask',
          price: 85,
          imageUrl: '/images/jbl.png',
          category: 'Haircare',
          stock: 100,
          rating: 4.8,
          reviews: 455,
          discount: 10,
          deliveryInfo: "dd",
          tag: "Best Tag"
      },
      {
          id: 25,
          name: 'Body Butter',
          price: 75,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 50,
          rating: 4.7,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 26,
          name: 'Beard Oil',
          price: 60,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 130,
          rating: 4.6,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 27,
          name: 'Perfume Set',
          price: 120,
          imageUrl: '/images/jbl.png',
          category: 'Fragrance',
          stock: 40,
          rating: 4.9,
          discount: 15,
          reviews: 455,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 28,
          name: 'Conditioner',
          price: 35,
          imageUrl: '/images/jbl.png',
          category: 'Haircare',
          stock: 140,
          rating: 4.3,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 29,
          name: 'Hand Cream',
          price: 20,
          imageUrl: '/images/jbl.png',
          category: 'Skincare',
          stock: 160,
          rating: 4.4,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 30,
          name: 'Foot Scrub',
          price: 30,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 120,
          rating: 4.5,
          discount: 5,
          reviews: 455,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 31,
          name: 'Shower Gel',
          price: 50,
          imageUrl: '/images/jbl.png',
          category: 'Body Care',
          stock: 110,
          rating: 4.7,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      },
      {
          id: 32,
          name: 'Hair Serum',
          price: 65,
          imageUrl: '/images/jbl.png',
          category: 'Haircare',
          stock: 80,
          rating: 4.6,
          reviews: 455,
          discount: 10,
          deliveryInfo: "Fast Delivery",
          tag: "Best Tag"
      }
      
  ];
  