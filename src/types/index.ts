export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  tags: string[];
  isNew: boolean;
  isFeatured: boolean;
  rating: number;
  reviewCount: number;
  releaseDate: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}
