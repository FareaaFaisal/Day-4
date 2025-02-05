"use client"; // This marks the component as a client-side component

import AddToCart from "@/app/components/AddToCart"; // Import the AddToCart component
import Image from "next/image";
import Link from "next/link";
import HeartLike from "@/app/components/like";
import QuantityControl from "@/app/components/QuantityControl";
import { FoodItem } from "../../../../types";
import TabComponent from "@/app/components/Moreinfo";

// Updated interface without 'slug'
interface ProductDetailClientProps {
  product: FoodItem;
}

const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  return (
    <div>
      {/* Banner */}
      <div className="w-[100%] relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          width={500}
          height={500}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            Product Details Page
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/menu" className="text-orange-500"> Product Details Page</Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 items-center justify-between mt-2">
        <div className="flex flex-row gap-10 items-center ">
          <div className="flex flex-col gap-2 ml-20 mt-[-150px]">
            <Image
              src={product.image_url}
              alt={product.name}
              width={120}
              height={129}
              className="rounded-md"
            />
            {/* Repeat image elements as needed */}
            <Image
              src={product.image_url}
              alt={product.name}
              width={120}
              height={129}
              className="rounded-md"
            />
            <Image
              src={product.image_url}
              alt={product.name}
              width={120}
              height={129}
              className="rounded-md"
            />
            <Image
              src={product.image_url}
              alt={product.name}
              width={120}
              height={129}
              className="rounded-md"
            />
          </div>

          {/* Big Image of Product */}
          <div className="mt-[-150px]">
            <Image
              src={product.image_url}
              alt={product.name}
              width={500}
              height={596}
              className="rounded-md"
            />
          </div>

          <div className="flex-col mt-[-50px]">
            <button className="text-white bg-[#FF9F0D] rounded-lg px-5 py-1 mt-24">
              {/* Show "Available" or "Out of Stock" based on the "available" value */}
              <p className="text-sm">
                {product.available ? "In Stock" : "Out of Stock"}
              </p>
            </button>
            <h1 className="text-5xl font-bold mt-4 text-gray-600">{product.name}</h1>
            <p className="mt-4 mb-4 text-gray-700">{product.description}</p>
            <hr />
            <p className="text-3xl mt-8 mb-4 font-bold text-gray-600">${product.price.toFixed(2)}</p>
            <Image src="/Rating.png" alt="Ratings" width={333} height={24} />
            <p className="mt-8 mb-4 text-gray-600">Dictum/Circus/Ricus</p>
            <div className="flex gap-8">
              <QuantityControl />
              <AddToCart product={product} /> {/* Use the AddToCart component here */}
              <Link href="/cart" className="mt-0 border border-[#FF9F0D] px-8 py-[4px] text-center text-yellow-500">
                View Cart
              </Link>
            </div>
            <hr className="mt-4 mb-4" />
            <HeartLike />
            <p className="mt-2 text-gray-600">Category: {product.category}</p>
            <p className="mt-2 text-gray-600">Tags: {product.tags.join(', ')}</p>

            <div className="flex gap-4 mt-6 mb-10">
              <p className="text-gray-600">Share:</p>
              <Link href="https://www.facebook.com" passHref>
                <Image
                  src="/facebook (1).png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.twitter.com" passHref>
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.youtube.com" passHref>
                <Image
                  src="/youtube.png"
                  alt="Youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <TabComponent />
      </div>
    </div>
  );
};

export default ProductDetailClient;
