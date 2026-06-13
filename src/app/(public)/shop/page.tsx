import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/shared/utils/get-products";
import React from "react";

export default async function ShopPage() {
  const products = await getProducts({ cache: "no-store" });
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
