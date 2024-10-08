// Define the type for the image data
interface ImageData {
    id: number;
    title: string;
    url: string;
    description: string;
}

// Define the array of images using the type
const imageData: ImageData[] = [

    {
        id: 5,
        title: "Image 5",
        url: "/images/jbl.png",
        description: "This is the fifth image.",
    },
    {
        id: 1,
        title: "Image 1",
        url: "/images/banner1.jpg",
        description: "This is the first image.",
    },
    {
        id: 2,
        title: "Image 2",
        url: "/images/banner2.jpg",
        description: "This is the second image.",
    },
    {
        id: 3,
        title: "Image 3",
        url: "/images/banner3.png",
        description: "This is the third image.",
    },
    {
        id: 4,
        title: "Image 4",
        url: "/images/banner4.jpg",
        description: "This is the fourth image.",
    },
   
];

export default imageData;
