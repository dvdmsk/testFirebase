import { API_URL } from "@/app/constants/constants";
import { ProductCard, type IProduct } from "@/components/ProductCard";
import React from "react";

export default async function shopSSGPage() {
  const response = await fetch(API_URL);
  const products = (await response.json()) as IProduct[];
  return (
    <div className="grid grid-cols-3 gap-4">{products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}</div>
  );
}
