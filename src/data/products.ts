export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  img: string;
  slug: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Mens Cognac Harrington Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp1.gif',
    slug: 'mens-cognac-harrington-leather-jacket'
  },
  {
    id: 2,
    title: 'Mens Classic Cognac Harrington Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp2.gif',
    slug: 'mens-classic-cognac-harrington-leather-jacket'
  },
  {
    id: 3,
    title: 'Mens Cognac Shirt Collar Leather Jacket',
    price: 189,
    originalPrice: 320,
    discount: '41% OFF',
    img: '/pp3.gif',
    slug: 'mens-cognac-shirt-collar-leather-jacket'
  },
  {
    id: 4,
    title: 'Mens Black Cafe Racer Leather Jacket With White Stripes',
    price: 189,
    originalPrice: 300,
    discount: '37% OFF',
    img: '/pp4.gif',
    slug: 'mens-black-cafe-racer-leather-jacket-with-white-stripes'
  },
  {
    id: 5,
    title: 'Womens Black Biker Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp5.gif',
    slug: 'womens-black-biker-leather-jacket'
  },
  {
    id: 6,
    title: 'Mens Brown Bomber Leather Jacket',
    price: 179,
    originalPrice: 270,
    discount: '34% OFF',
    img: '/pp6.gif',
    slug: 'mens-brown-bomber-leather-jacket'
  },
  {
    id: 7,
    title: 'Womens Red Moto Leather Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp7.jpg',
    slug: 'womens-red-moto-leather-jacket'
  },
  {
    id: 8,
    title: 'Mens Suede Trucker Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp8.gif',
    slug: 'mens-suede-trucker-jacket'
  },
  {
    id: 9,
    title: 'Womens Tan Shearling Leather Jacket',
    price: 229,
    originalPrice: 370,
    discount: '38% OFF',
    img: '/pp9.gif',
    slug: 'womens-tan-shearling-leather-jacket'
  },
  {
    id: 10,
    title: 'Mens Classic Black Leather Blazer',
    price: 199,
    originalPrice: 310,
    discount: '36% OFF',
    img: '/pp10.gif',
    slug: 'mens-classic-black-leather-blazer'
  },
  {
    id: 11,
    title: 'Womens Cropped Brown Leather Jacket',
    price: 189,
    originalPrice: 295,
    discount: '36% OFF',
    img: '/p11.gif',
    slug: 'womens-cropped-brown-leather-jacket'
  },
  {
    id: 12,
    title: 'Mens Vintage Distressed Leather Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp12.gif',
    slug: 'mens-vintage-distressed-leather-jacket'
  },
  {
    id: 13,
    title: 'Womens White Leather Moto Jacket',
    price: 219,
    originalPrice: 360,
    discount: '39% OFF',
    img: '/pp13.gif',
    slug: 'womens-white-leather-moto-jacket'
  },
  {
    id: 14,
    title: 'Mens Blue Suede Bomber Jacket',
    price: 229,
    originalPrice: 370,
    discount: '38% OFF',
    img: '/pp14.gif',
    slug: 'mens-blue-suede-bomber-jacket'
  },
  {
    id: 15,
    title: 'Womens Green Biker Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp15.gif',
    slug: 'womens-green-biker-leather-jacket'
  },
  {
    id: 16,
    title: 'Mens Grey Cafe Racer Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp16.gif',
    slug: 'mens-grey-cafe-racer-leather-jacket'
  },
  {
    id: 17,
    title: 'Womens Burgundy Leather Blazer',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp17.gif',
    slug: 'womens-burgundy-leather-blazer'
  },
  {
    id: 18,
    title: 'Mens Tan Aviator Shearling Jacket',
    price: 239,
    originalPrice: 390,
    discount: '39% OFF',
    img: '/pp18.gif',
    slug: 'mens-tan-aviator-shearling-jacket'
  },
  {
    id: 19,
    title: 'Womens Classic Black Leather Trench',
    price: 249,
    originalPrice: 400,
    discount: '38% OFF',
    img: '/pp19.gif',
    slug: 'womens-classic-black-leather-trench'
  },
  {
    id: 20,
    title: 'Mens Olive Green Leather Bomber',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp20.gif',
    slug: 'mens-olive-green-leather-bomber'
  },
  {
    id: 21,
    title: 'Womens Pink Suede Moto Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp21.gif',
    slug: 'womens-pink-suede-moto-jacket'
  },
  {
    id: 22,
    title: 'Mens Maroon Leather Biker Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp22.gif',
    slug: 'mens-maroon-leather-biker-jacket'
  },
  {
    id: 23,
    title: 'Womens Navy Blue Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp23.gif',
    slug: 'womens-navy-blue-leather-jacket'
  },
  {
    id: 24,
    title: 'Mens Black Hooded Leather Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp24.gif',
    slug: 'mens-black-hooded-leather-jacket'
  }
];

// Helper function to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return products;
};

// Helper function to get products by category (Men/Women)
export const getProductsByCategory = (category: 'men' | 'women'): Product[] => {
  return products.filter(product => 
    product.title.toLowerCase().includes(category.toLowerCase())
  );
};
