import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import SearchAndFilter from "../components/SearchandFilter";


type FoodItem = {
  name: string;
  price: number;
  originalPrice: number;
  slug: string;
  image_url: string;
  category: string; // Category added to filter by
};

const query = `*[_type=='food']{
  name, 
  price, 
  originalPrice, 
  "slug": slug.current,
  "image_url": image.asset->url,
  category
}`;

export default async function Shop() {
  const food: FoodItem[] = await client.fetch(query);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar / Hero Section */}
      <div className="relative font-[sans-serif] pt-20 before:absolute lg:h-full h-[300px] before:w-full before:h-full before:inset-0 bg-black before:z-[-10]">
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
    <h2 className="text-white md:text-5xl text-3xl font-bold mb-8 text-center 
      lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      z-10 lg:z-50">
      Shop
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Shop</Link>
    </div>
  </div>
</div>

      {/* Shop Page */}
      <div className="mt-10 mb-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center gap-4">
        {/* Main Content */}
        <div className="flex flex-col gap-4 w-full lg:w-[70%]">
          {/* Use the Search and Filter Component */}
          <SearchAndFilter food={food} /> {/* Pass fetched data as props */}
        </div>

         {/* Sidebar */}
         <div className="lg:mt-[170px] mt-[30px] w-full lg:w-[25%] flex flex-col gap-8">
         

          {/* Recent Posts */}
          <div className="border p-4 lg:mt-14 md:mt-0">
            <h1 className="font-bold mb-4">Recent Posts</h1>
            {["Recent post.png", "Recent post (1).png", "Recent post (2).png", "Recent post (3).png"].map((post, index) => (
              <Image
                key={index}
                src={`/${post}`}
                alt="Recent Post"
                width={323}
                height={107}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Filter By Menu */}
          <div className="border p-4 hidden md:hidden lg:block">
            <h1 className="font-bold mb-4">Filter By Menu</h1>
            {["Chicken Fry.png", "Chicken Fry (1).png", "Chicken Fry (2).png", "Chicken Fry (3).png", "Chicken Fry (4).png"].map((menu, index) => (
              <Image
                key={index}
                src={`/${menu}`}
                alt="Menu Item"
                width={323}
                height={62}
                className="cursor-pointer mb-4"
              />
            ))}
          </div>

          {/* Popular Tag */}
          <div className="border p-4">
            <h1 className="font-bold mb-4">Popular Tag</h1>
            <Image src="/Popular Tag.png" alt="Popular Tag" width={324} height={167} />
          </div>
        </div>
      </div>
    </div>
  );
}
