type Products = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type Categories =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

type Cart = {
  id: number;
  userId: number;
  date: string;
  products: string[{ productId: number; quantity: number }];
};
