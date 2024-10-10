import Image from 'next/image';
import { Eye, Heart, Star, Truck, Tag } from 'lucide-react';

interface ProductCardProps {
    name: string;
    price: number;
    imageUrl: string;
    discount?: number;
    rating: number;
    reviews: number;
    deliveryInfo: string;
    tag: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    imageUrl,
    discount,
    rating,
    reviews,
    deliveryInfo,
    tag
}) => {
    return (
        <div className="rounded-lg border lg:w-64 md:border-border bg-background p-2 shadow-sm">
            <div className="lg:h-36 h-28 w-full">
                <a href="#">
                    <Image
                        className="mx-auto h-full"
                        src={imageUrl}
                        alt={name}
                        width={400}
                        height={200}
                    />
                </a>
            </div>
            <div className="pt-2">
                <div className="mb-2 flex items-center bg-background justify-between gap-4">
                    {discount && (
                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-foreground">
                            {discount}% off
                        </span>
                    )}
                    <div className="flex items-center justify-end gap-1">
                        <button
                            type="button"
                            className="rounded-lg lg:p-2 text-foreground"
                            aria-label="Quick look"
                        >
                            <Eye className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            className="rounded-lg lg:p-2 text-foreground"
                            aria-label="Add to favorites"
                        >
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div
                    className="block text-base font-semibold leading-tight text-foreground  lg:h-fit hover:underline line-clamp-2 lg:line-clamp-1"
                >
                    {name}
                </div>
                <div className="lg:mt-2 flex lg:flex-row items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <p className="text-sm font-medium text-primary">{rating.toFixed(1)}</p>
                    <p className="text-sm lg:flex hidden font-medium text-foreground">({reviews})</p>
                </div>
                <ul className="mt-2 lg:flex hidden items-center gap-4">
                    <li className="md:flex-row text-center flex flex-col items-center gap-2">
                        <Truck className="h-4 w-4 text-foreground" />
                        <p className="text-sm font-medium text-foreground">{deliveryInfo}</p>
                    </li>
                    <li className="md:flex-row text-center flex flex-col items-center gap-2">
                        <Tag className="h-4 w-4 text-foreground" />
                        <p className="text-sm font-medium text-foreground">{tag}</p>
                    </li>
                </ul>
                <div className="lg:mt-4 mt-2 lg:flex-row flex flex-col items-center justify-between gap-2">
                    <p className="lg:text-2xl text-lg font-extrabold leading-tight text-primary">${price}</p>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-lg bg-primary md:px-5 px-5 md:py-2.5 py-2.5 text-sm font-medium text-foreground focus:outline-none"
                    >
                        <svg className="-ms-2 me-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
