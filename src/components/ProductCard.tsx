import React from "react";
import Image from "next/image";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="group w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] p-4 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-black/20 hover:border-white/15">
      <div>
        {/* Контейнер зображення */}
        <div className="relative aspect-square w-full rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-inner">
          <Image
            src={image}
            alt={title}
            fill
            className="p-6 object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={id <= 3}
          />
          
          {/* Категорія */}
          <span className="absolute top-3 left-3 bg-zinc-900/95 text-white/90 backdrop-blur-md text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/10 shadow-lg">
            {category}
          </span>

          {/* Кнопка "Улюблене" */}
          <button
            type="button"
            className="absolute top-3 right-3 p-2 rounded-full bg-zinc-900/85 hover:bg-zinc-900 text-white/80 hover:text-red-400 border border-white/10 shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
            title="Add to wishlist"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>

        {/* Інформація про продукт */}
        <div className="mt-4 px-1">
          <h3 className="text-white font-semibold text-lg line-clamp-1 group-hover:text-blue-400 transition-colors" title={title}>
            {title}
          </h3>
          
          {/* Рейтинг */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex items-center text-yellow-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-bold ml-1 text-white/90">{rating.rate}</span>
            </div>
            <span className="text-[11px] text-white/40">({rating.count} reviews)</span>
          </div>

          <p className="mt-2 text-white/50 text-xs line-clamp-2 leading-relaxed min-h-[2rem]">
            {description}
          </p>
        </div>
      </div>

      {/* Футер карти (Ціна + Купити) */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between px-1">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Price</span>
          <span className="text-xl font-bold text-white">${price.toFixed(2)}</span>
        </div>
        
        <button
          type="button"
          className="bg-white hover:bg-white/90 active:scale-95 text-zinc-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-lg shadow-white/5 flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375 0 01.75 0zm7.5 0a.375 0 11-.75 0 .375 0 01.75 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
