import { ShippingType, Category, Product, Collection } from "@/lib/types";

let shippingData: ShippingType[] = [
  {
    company: "HyperSKU Economy Shipping",
    delivery: "10-15",
    shippingFee: "$20.01",
    discountedShippingFee: "",
    tracking: "Yes",
  },
  {
    company: "Amazon Prime",
    delivery: "2-3",
    shippingFee: "$10.00",
    discountedShippingFee: "$8.00",
    tracking: "Yes",
  },
  {
    company: "FedEx Express",
    delivery: "3-5",
    shippingFee: "$15.00",
    discountedShippingFee: "$12.50",
    tracking: "Yes",
  },
  {
    company: "UPS Ground",
    delivery: "5-7",
    shippingFee: "$13.00",
    discountedShippingFee: "$11.00",
    tracking: "Yes",
  },
  {
    company: "DHL Standard",
    delivery: "7-10",
    shippingFee: "$18.00",
    discountedShippingFee: "",
    tracking: "No",
  },
];
let categories: Category[] = [
  {
    id: "women-clothing",
    title: "Women's Clothing",
    img: "t1.jpg",
  },
  {
    id: "men-clothing",
    title: "Men's Clothing",
    img: "no_pic.png",
  },
  {
    id: "children-clothing",
    title: "Children's Clothing",
    img: "c2.jpg",
  },
  {
    id: "electronics",
    title: "Electronics",
    img: "no_pic.png",
  },
  {
    id: "home-goods",
    title: "Home Goods",
    img: "c5.jpg",
  },
  {
    id: "outdoor-gear",
    title: "Outdoor Gear",
    img: "t3.png",
  },
  {
    id: "books-media",
    title: "Books & Media",
    img: "t4.png",
  },
  {
    id: "beauty-products",
    title: "Beauty Products",
    img: "no_pic.png",
  },
  {
    id: "health-products",
    title: "Health Products",
    img: "t3.png",
  },
  {
    id: "automotive",
    title: "Automotive",
    img: "t2.png",
  },
];

let products: Product[] = [
  {
    id: "product-1",
    category: categories[0],
    title: "Summer Dress",
    img: "c2.png",
    price: "$45.00",
    shipping: shippingData[0],
  },
  {
    id: "product-2",
    category: categories[1],
    title: "Casual Men's Shirt",
    img: "c2.png",
    price: "$35.00",
    shipping: shippingData[1],
  },
  {
    id: "product-3",
    category: categories[2],
    title: "Children's Coat",
    img: "c2.png",
    price: "$55.00",
    shipping: shippingData[2],
  },
  {
    id: "product-4",
    category: categories[3],
    title: "Laptop",
    img: "c2.png",
    price: "$800.00",
    shipping: shippingData[3],
  },
  {
    id: "product-5",
    category: categories[4],
    title: "Home Decor",
    img: "c2.png",
    price: "$75.00",
    shipping: shippingData[4],
  },
  {
    id: "product-6",
    category: categories[5],
    title: "Camping Tent",
    img: "c2.png",
    price: "$99.99",
    shipping: shippingData[1],
  },
  {
    id: "product-7",
    category: categories[6],
    title: "Bestseller Book",
    img: "c2.png",
    price: "$19.99",
    shipping: shippingData[2],
  },
  {
    id: "product-8",
    category: categories[7],
    title: "Skin Care Set",
    img: "c2.png",
    price: "$59.99",
    shipping: shippingData[3],
  },
  {
    id: "product-9",
    category: categories[8],
    title: "Vitamin C",
    img: "c2.png",
    price: "$29.99",
    shipping: shippingData[4],
  },
  {
    id: "product-10",
    category: categories[9],
    title: "Car Wax",
    img: "c2.png",
    price: "$15.99",
    shipping: shippingData[0],
  },
];
let recommendedProducts: Product[] = [
  {
    id: "product-1",
    category: categories[0],
    title: "Summer Dress",
    img: "c2.jpg",
    price: "$45.00",
    shipping: shippingData[0],
  },
  {
    id: "product-2",
    category: categories[1],
    title: "Casual Men's Shirt",
    img: "c3.jpg",
    price: "$35.00",
    shipping: shippingData[1],
  },
  {
    id: "product-3",
    category: categories[2],
    title: "Children's Coat",
    img: "c4.jpg",
    price: "$55.00",
    shipping: shippingData[2],
  },
  {
    id: "product-4",
    category: categories[3],
    title: "Laptop",
    img: "c7.jpg",
    price: "$800.00",
    shipping: shippingData[3],
  },
];
let bestSellers: Product[] = [
  {
    id: "product-6",
    category: categories[5],
    title: "Camping Tent",
    img: "c7.jpg",
    price: "$99.99",
    shipping: shippingData[1],
  },
  {
    id: "product-7",
    category: categories[6],
    title: "Bestseller Book",
    img: "c6.jpg",
    price: "$19.99",
    shipping: shippingData[2],
  },
  {
    id: "product-8",
    category: categories[7],
    title: "Skin Care Set",
    img: "no_pic.png",
    price: "$59.99",
    shipping: shippingData[3],
  },
  {
    id: "product-9",
    category: categories[8],
    title: "Vitamin C",
    img: "c3.jpg",
    price: "$29.99",
    shipping: shippingData[4],
  },
];

let collections: Collection[] = [
  {
    id: "collection1",
    title: "Top Pet Supplies",
    img: "no_pic.png",
  },
  {
    id: "collection2",
    title: "TikTok Viral Products",
    description: "TIiktok hot commodity",
    img: "c2.jpg",
  },
  {
    id: "collection3",
    title: "Top Household Supplies",
    description: "Hot Household Products",
    img: "c3.jpg",
  },
  {
    id: "collection4",
    title: "Trending Products For 2023",
    description: "Trending Products For 2023",
    img: "c4.jpg",
  },
];
export const getProducts = () => products;
export const getRecommendedProducts = () => recommendedProducts;
export const getBestSellers = () => bestSellers;
export const getCollections = () => collections;
export const getCategories = () => categories;
export const getShippingData = () => shippingData;

export const getProductsByCategory = () => {};
