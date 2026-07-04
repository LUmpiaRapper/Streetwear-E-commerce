import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Sneakers",
    slug: "sneakers",
    image: "/images/category-sneakers.jpg",
    productCount: 24,
  },
  {
    id: "2",
    name: "Apparel",
    slug: "apparel",
    image: "/images/category-apparel.jpg",
    productCount: 36,
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    image: "/images/category-accessories.jpg",
    productCount: 18,
  },
  {
    id: "4",
    name: "Collections",
    slug: "collections",
    image: "/images/category-collections.jpg",
    productCount: 6,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "AERO KNIT RUNNER",
    brand: "STREETWEAR",
    category: "sneakers",
    subcategory: "running",
    price: 220,
    originalPrice: 280,
    description:
      "Engineered for the intersection of performance and street aesthetics. The AERO KNIT RUNNER features a seamless knitted upper with responsive cushioning, designed for both the track and the pavement.",
    images: [
      "/images/product-1-a.jpg",
      "/images/product-1-a.jpg",
      "/images/product-1-a.jpg",
      "/images/product-1-a.jpg",
    ],
    colors: [
      { name: "Triple Black", hex: "#0A0A0A", image: "/images/product-1-a.jpg" },
      { name: "Bone White", hex: "#F5F5F0", image: "/images/product-1-a.jpg" },
      { name: "Core Red", hex: "#E50914", image: "/images/product-1-a.jpg" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "US 13"],
    tags: ["New Drop", "Best Seller"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 342,
    releaseDate: "2025-11-15",
  },
  {
    id: "2",
    name: "URBAN CARGO PANT",
    brand: "STREETWEAR",
    category: "apparel",
    subcategory: "bottoms",
    price: 150,
    description:
      "Relaxed-fit cargo pants constructed from heavyweight Japanese cotton twill. Features multi-pocket utility detailing with an adjustable waistband and tapered leg.",
    images: [
      "/images/product-2-a.jpg",
      "/images/product-2-a.jpg",
      "/images/product-2-a.jpg",
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A", image: "/images/product-2-a.jpg" },
      { name: "Olive", hex: "#4A5D3E", image: "/images/product-2-a.jpg" },
      { name: "Khaki", hex: "#C3B091", image: "/images/product-2-a.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["Popular"],
    isNew: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 187,
    releaseDate: "2025-10-20",
  },
  {
    id: "3",
    name: "TECH FLEECE HOODIE",
    brand: "STREETWEAR",
    category: "apparel",
    subcategory: "tops",
    price: 180,
    description:
      "Premium technical fleece with a brushed interior for warmth. The oversized silhouette features raglan sleeves, a kangaroo pocket, and bonded hem finishes.",
    images: [
      "/images/product-3-a.jpg",
      "/images/product-3-a.jpg",
      "/images/product-3-a.jpg",
    ],
    colors: [
      { name: "Charcoal", hex: "#404040", image: "/images/product-3-a.jpg" },
      { name: "Cream", hex: "#F5F0E8", image: "/images/product-3-a.jpg" },
      { name: "Navy", hex: "#1B2838", image: "/images/product-3-a.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["New Drop"],
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 256,
    releaseDate: "2025-11-01",
  },
  {
    id: "4",
    name: "SCULPTED RUNNER 2",
    brand: "STREETWEAR",
    category: "sneakers",
    subcategory: "lifestyle",
    price: 260,
    description:
      "The second iteration of our sculpted sole silhouette. A hybrid of organic flowing lines and sharp architectural details, finished with reflective accents and a cloud-like midsole.",
    images: [
      "/images/product-4-a.jpg",
      "/images/product-4-a.jpg",
      "/images/product-4-a.jpg",
    ],
    colors: [
      { name: "Phantom", hex: "#E8E4DC", image: "/images/product-4-a.jpg" },
      { name: "Obsidian", hex: "#1C1C1C", image: "/images/product-4-a.jpg" },
      { name: "Fossil", hex: "#8B7D6B", image: "/images/product-4-a.jpg" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    tags: ["Best Seller", "Limited"],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 521,
    releaseDate: "2025-09-01",
  },
  {
    id: "5",
    name: "MONOGRAM UTILITY VEST",
    brand: "STREETWEAR",
    category: "apparel",
    subcategory: "outerwear",
    price: 200,
    description:
      "A modular approach to outerwear. This lightweight utility vest features detachable pouches, hidden zip compartments, and a water-repellent shell.",
    images: [
      "/images/product-5-a.jpg",
      "/images/product-5-a.jpg",
      "/images/product-5-a.jpg",
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A", image: "/images/product-5-a.jpg" },
      { name: "Orange", hex: "#FF4400", image: "/images/product-5-a.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Limited"],
    isNew: true,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 98,
    releaseDate: "2025-11-10",
  },
  {
    id: "6",
    name: "MINIMALIST BACKPACK",
    brand: "STREETWEAR",
    category: "accessories",
    subcategory: "bags",
    price: 175,
    description:
      "A refined take on the everyday carry. Constructed from waxed canvas with full-grain leather trims, padded laptop compartment, and hidden external pockets.",
    images: [
      "/images/product-6-a.jpg",
      "/images/product-6-a.jpg",
      "/images/product-6-a.jpg",
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A", image: "/images/product-6-a.jpg" },
      { name: "Tan", hex: "#D4A76A", image: "/images/product-6-a.jpg" },
    ],
    sizes: ["One Size"],
    tags: ["Popular"],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 412,
    releaseDate: "2025-08-15",
  },
  {
    id: "7",
    name: "THERMAL JOGGER",
    brand: "STREETWEAR",
    category: "apparel",
    subcategory: "bottoms",
    price: 130,
    description:
      "Winter-ready joggers with a brushed thermal lining. Features ribbed cuffs, zip pockets, and an elastic drawstring waist for all-day comfort.",
    images: [
      "/images/product-7-a.jpg",
      "/images/product-7-a.jpg",
      "/images/product-7-a.jpg",
    ],
    colors: [
      { name: "Heather Grey", hex: "#8C8C8C", image: "/images/product-7-a.jpg" },
      { name: "Black", hex: "#0A0A0A", image: "/images/product-7-a.jpg" },
      { name: "Burgundy", hex: "#6E2C3D", image: "/images/product-7-a.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["New Drop"],
    isNew: true,
    isFeatured: false,
    rating: 4.4,
    reviewCount: 156,
    releaseDate: "2025-11-05",
  },
  {
    id: "8",
    name: "SIGNATURE CAP",
    brand: "STREETWEAR",
    category: "accessories",
    subcategory: "headwear",
    price: 55,
    description:
      "Six-panel structured cap with an embroidered signature logo. Adjustable strap closure with a pre-curved brim. Made from 100% organic cotton.",
    images: [
      "/images/product-8-a.jpg",
      "/images/product-8-a.jpg",
      "/images/product-8-a.jpg",
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A", image: "/images/product-8-a.jpg" },
      { name: "White", hex: "#FAFAFA", image: "/images/product-8-a.jpg" },
      { name: "Orange", hex: "#FF4400", image: "/images/product-8-a.jpg" },
    ],
    sizes: ["One Size"],
    tags: ["Best Seller"],
    isNew: false,
    isFeatured: false,
    rating: 4.3,
    reviewCount: 876,
    releaseDate: "2025-06-01",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
