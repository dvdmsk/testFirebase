import { API_URL } from "@/app/constants/constants";
import { type IProduct } from "@/components/ProductCard";

const FALLBACK_PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

export async function getProducts(init?: RequestInit): Promise<IProduct[]> {
  try {
    const response = await fetch(API_URL, init);
    
    if (!response.ok) {
      console.warn(`Fetch failed with status ${response.status}. Using fallback products.`);
      return FALLBACK_PRODUCTS;
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`Received non-JSON content: ${contentType}. Using fallback products.`);
      return FALLBACK_PRODUCTS;
    }

    const data: unknown = await response.json();
    return data as IProduct[];
  } catch (error) {
    console.error("Error fetching products, using fallback data:", error);
    return FALLBACK_PRODUCTS;
  }
}
