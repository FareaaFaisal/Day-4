import { client } from "@/sanity/lib/client";
import ProductDetailClient from "./productdetail"; // Import client-side component
import { FoodItem } from "../../../../types"; // Define the FoodItem type

const query = `*[_type == "food" && slug.current == $slug][0]{
  name, category,
  price,tags, available,
  "description": description,
  "image_url": image.asset->url
}`;

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  // Await params before destructuring
  const { slug } = await params;

  // Fetch product data from Sanity
  const product: FoodItem | null = await client.fetch(query, { slug });

  if (!product) {
    return <div>Product not found</div>;
  }

  // Pass fetched data to the client-side component
  return <ProductDetailClient product={product} />;
}
