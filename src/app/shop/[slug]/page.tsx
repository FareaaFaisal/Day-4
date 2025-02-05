import { client } from "@/sanity/lib/client";
import ProductDetailClient from "./productdetail"; // Import client-side component
import { FoodItem } from "../../../../types"; // Ensure FoodItem is imported correctly

const query = `*[_type == "food" && slug.current == $slug][0]{
  name, category,
  price, tags, available,
  "description": description,
  "image_url": image.asset->url
}`;

interface ProductDetailProps {
  // Make params a Promise as expected in PageProps
  params: Promise<{ slug: string }>;  // Typing for the params as a Promise
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const resolvedParams = await params;  // Await the params to get the actual object
  const { slug } = resolvedParams;  // Directly access the 'slug' from resolved params

  // Fetch product data from Sanity
  const product: FoodItem | null = await client.fetch(query, { slug });

  if (!product) {
    return <div>Product not found</div>;
  }

  // Pass fetched data to the client-side component
  return <ProductDetailClient product={product} />;
}
