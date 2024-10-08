"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import imageData from "./advert"; // Make sure to adjust this path

// Define the type for the image data (optional if already defined in another file)
interface ImageData {
  id: number;
  title: string;
  url: string;
  description: string;
}

// Carousel component with the autoplay plugin
const AdCarousel: React.FC = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]} // Add the Autoplay plugin
      className="lg:w-3/4 w-full outline-none border-none max-w-6xl"
      onMouseEnter={() => plugin.current.stop()} // Stop autoplay on hover
      onMouseLeave={() => plugin.current.reset()} // Reset autoplay after hover
    >
      <CarouselContent>
        {imageData.map((data: ImageData) => (
          <CarouselItem key={data.id}>
            <div className=" border-none  outline-none ">
              <Card className="outline-none  border-none shadow-none  "  >
                <CardContent className="flex items-center border-none outline-none  relative justify-center  lg:w-full p-6 h-52 lg:h-80">
                  <Image
                    src={data.url} // Using data.url from imageData
                    alt={data.title} // Using data.title for alt text
                    width={600} // Specify width
                    height={100} // Specify height
                    className="ad-slide-image object-cover  "
                    layout="responsive" // Responsive layout for better scaling
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Optional Carousel Controls */}
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default AdCarousel;
