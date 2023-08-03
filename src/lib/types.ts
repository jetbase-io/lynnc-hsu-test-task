export type ShippingType = {
  company: string;
  delivery: string;
  shippingFee: string;
  discountedShippingFee: string;
  tracking: "Yes" | "No";
};

export type Category = {
  id: string;
  title: string;
  img: string;
};

export type Product = {
  id: string;
  category: Category[] | Category;
  title: string;
  img: string;
  price: string;
  shipping: ShippingType;
};

export type Collection = {
  id: string;
  title: string;
  img: string;
  description?: string;
};
