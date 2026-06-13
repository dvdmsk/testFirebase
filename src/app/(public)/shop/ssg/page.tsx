import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/shared/utils/get-products";
import React from "react";

export default async function shopSSGPage() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
