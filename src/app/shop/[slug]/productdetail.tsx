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
      <div className="relative font-[sans-serif] pt-20 before:absolute lg:h-full lg:mb-36 h-[300px] before:w-full before:h-full before:inset-0 bg-black before:z-[-10]">
  {/* Banner Image */}
  <Image
    src="/unsplash_4ycv3Ky1ZZU.png"
    alt="Banner Image"
    width={500}
    height={500}
    className="absolute inset-0 w-full lg:h-full h-[300px] object-cover"
  />

  {/* Text Content */}
  <div className="min-h-[350px] relative z-40 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 lg:mt-0 mt-0">
    <h2 className="text-white md:text-4xl text-2xl font-bold mb-8 text-center 
      lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      z-10 lg:z-50">
      Product Details Page
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Product Details Page</Link>
    </div>
  </div>
</div>

      {/* Content */}
      <div className="p-6 flex flex-col lg:flex-row gap-10 items-center justify-between mt-2">
        {/* Image Gallery */}
        <div className="lg:flex lg:flex-col gap-2 lg:ml-20 mt-4 lg:mt-[-150px] hidden md:hidden">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src={product.image_url}
              alt={product.name}
              width={120}
              height={129}
              className="rounded-md"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="mt-4 lg:mt-[-150px]">
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={596}
            className="rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-col mt-4 lg:mt-[-50px] text-center lg:text-left">
          <button className="text-white bg-[#FF9F0D] rounded-lg px-5 py-1">
            <p className="text-sm">{product.available ? "In Stock" : "Out of Stock"}</p>
          </button>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4 text-gray-600">{product.name}</h1>
          <p className="mt-4 mb-4 text-gray-700">{product.description}</p>
          <hr />
          <p className="text-2xl lg:text-3xl lg:mt-8 mt-4 mb-4 font-bold text-gray-600">${product.price.toFixed(2)}</p>
          <Image src="/Rating.png" alt="Ratings" width={200} height={24} />
          <p className="mt-4 mb-4 text-gray-600">Dictum/Circus/Ricus</p>

          {/* Quantity and Cart */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <QuantityControl />
            <div className="flex flex-row  gap-2">
            <AddToCart product={product} />
            <Link href="/cart" className="border border-[#FF9F0D] lg:px-8 py-2 lg:ml-0 ml-0 lg:w-[60%] w-[80%] text-yellow-500 text-sm lg:text-base">View Cart</Link>
            </div>
           
          </div>

          <hr className="mt-4 mb-4" />
          <HeartLike />
          <div className="flex lg:flex-col flex-row gap-4 lg:gap-0">
          <p className="mt-2 text-gray-600">Category: {product.category}</p>
          <p className="mt-2 text-gray-600">Tags: {product.tags.join(", ")}</p>
          </div>
          

          {/* Social Media */}
          <div className="flex gap-4 mt-6 mb-10 justify-center lg:justify-start">
            <p className="text-gray-600">Share:</p>
            {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
              <Link key={platform} href={`https://${platform}.com`} passHref>
                <Image src={`/${platform}.png`} alt={platform} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <TabComponent />
    </div>
  );
};

export default ProductDetailClient;
