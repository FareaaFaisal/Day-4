"use client";
import React, { createContext, useContext, useState } from "react";

// TypeScript type for food items
type FoodItem = {
  name: string;
  price: number;
  description: string;
  category: string;
  available: boolean;
  tags: string[];
  image_url: string;
};

type CartItem = FoodItem & { quantity: number };

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: FoodItem) => void;
  removeFromCart: (product: FoodItem) => void;
  updateQuantity: (product: FoodItem, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the application and provide context
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Try to load from localStorage on initial load
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const saveToLocalStorage = (items: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  };

  const addToCart = (product: FoodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
        saveToLocalStorage(prevItems);
        return [...prevItems];
      } else {
        // Add new item to the cart with quantity 1
        const newItem = { ...product, quantity: 1 };
        saveToLocalStorage([...prevItems, newItem]);
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (product: FoodItem) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.name !== product.name);
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (product: FoodItem, quantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.name === product.name ? { ...item, quantity } : item
      );
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
