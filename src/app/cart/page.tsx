"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext"; // Import useCart hook
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Access cart items and remove function

  if (cartItems.length === 0) {
    return (
      <div>  
       <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          width={500}
          height={500}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">Cart</h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/cart" className="text-orange-500">Cart</Link>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h2>
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:justify-between border-b pb-4">
              {/* Image and Details */}
              <div className="flex items-center lg:gap-4 gap-0 w-full">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md w-[90px] h-[100px] md:w-20 md:h-20"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-base md:text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm md:text-base">{item.description}</p>

                  {/* Quantity & Price */}
                  <div className="flex flex-row items-center ml-6 lg:ml-0 gap-10 mt-2">
                    <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 md:gap-3">
                      <button
                        onClick={() => updateQuantity(item, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 bg-gray-300 w-8 h-8 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-300 w-8 h-8 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 hover:text-red-700 mt-2 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="mt-6 md:mt-8 text-center md:text-left">
          <h3 className="text-xl font-semibold">
            Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
          <Link href={"/checkout"}>
          <button className="mt-4 px-6 py-3 bg-[#FF9F0D] text-white">Proceed to Checkout</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
