"use client"; // Make this a client-side component
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FoodItem = {
  name: string;
  price: number;
  originalPrice: number;
  slug: string;
  image_url: string;
  category: string;
};

type SearchAndFilterProps = {
  food: FoodItem[]; // Define the correct type here
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ food }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [sortOption, setSortOption] = useState("newest");

  // Filter food items based on search query and category
  const filteredFood = food.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "default" || item.category.toLowerCase() === selectedCategory.toLowerCase(); // Case insensitive comparison

    console.log(`Filtering: ${item.name}, matchesSearch: ${matchesSearch}, matchesCategory: ${matchesCategory}`); // Debugging line
    return matchesSearch && matchesCategory;
  });

  // Sorting logic for price, newest, etc. applied to filtered items
  let sortedFood = filteredFood.sort((a, b) => {
    switch (sortOption) {
      case "price-low-to-high":
        return a.price - b.price;
      case "price-high-to-low":
        return b.price - a.price;
      case "best-sellers":
        return 0; // Placeholder logic for best-sellers (you can add custom logic here)
      case "newest":
      default:
        return 0; // Placeholder logic for newest items (adjust as needed)
    }
  });

  // Limit to 3 items if the 'best-sellers' option is selected
  if (sortOption === "best-sellers") {
    sortedFood = sortedFood.slice(0, 3); // Only show the first 3 items
  }

  return (
    <div className="flex flex-wrap gap-4 mt-20 items-center justify-center">
      <p>Sort By: &nbsp;</p>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="lg:w-[30%] w-[60%] pl-3 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 text-gray-600"
      >
        <option value="newest">Newest</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="best-sellers">Best Sellers</option>
      </select>

      <p>Show: &nbsp;</p>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="lg:w-[30%] w-[60%] lg:pl-3 mr-[-20px] lg:mr-0 lg:pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 text-gray-600"
      >
        <option value="default">All</option>
        <option value="main course">Main Course</option>
        <option value="dessert">Desserts</option>
        <option value="sandwich">Sandwich</option>
        <option value="drink">Drink</option>
        <option value="appetizer">Appetizer</option>
      </select>

      {/* Search Box */}
      <div className="flex w-full border-1">
        <input
          type="text"
          placeholder="Search Your Keyword Here"
          className="lg:w-[60%] w-[70%] px-3 py-3 lg:ml-48 ml-2 bg-zinc-100 border border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="w-[76px] h-auto flex items-center justify-center bg-[#FF9F0D]">
          <Image src="/Group (2).svg" alt="search icon" width={24} height={24} />
        </button>
      </div>

      {/* Dynamic Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {sortedFood.map((item, index) => (
          <Link key={index} href={`/shop/${item.slug}`}>
            <div className="flex flex-col items-center cursor-pointer">
              <Image
                src={item.image_url}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <p className="text-2xl text-[#333333] font-bold">{item.name}</p>
              <p className="text-[#FF9F0D]">
                <span>
                  <del>${item.originalPrice.toFixed(2)}</del>
                </span>
                {" "}${item.price.toFixed(2)}
              </p>
              <p>Category: <span className="text-[#FF9F0D] underline">{item.category}</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
