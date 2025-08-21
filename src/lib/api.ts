const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  img: string;
  slug: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface ProductsResponse {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalProducts: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface SearchResponse {
  products: Product[];
  totalResults: number;
  searchQuery: string;
  filters: {
    minPrice: number;
    maxPrice: number;
    category?: string;
  };
  sort: {
    by: string;
    order: string;
  };
}

export interface Category {
  id: string;
  name: string;
  count: number;
  slug: string;
}

export interface CategoriesResponse {
  categories: Category[];
  totalProducts: number;
}

// Fetch all products with optional filtering and pagination
export async function fetchProducts(params?: {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<ProductsResponse>> {
  const searchParams = new URLSearchParams();
  
  if (params?.category) searchParams.append('category', params.category);
  if (params?.page) searchParams.append('page', params.page.toString());
  if (params?.limit) searchParams.append('limit', params.limit.toString());
  if (params?.search) searchParams.append('search', params.search);

  const url = `${API_BASE_URL}/api/products${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
  
  const response = await fetch(url);
  return response.json();
}

// Fetch a single product by ID
export async function fetchProduct(id: number): Promise<ApiResponse<Product>> {
  const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
  return response.json();
}

// Search products with advanced filtering
export async function searchProducts(params?: {
  q?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  sortBy?: string;
  sortOrder?: string;
}): Promise<ApiResponse<SearchResponse>> {
  const searchParams = new URLSearchParams();
  
  if (params?.q) searchParams.append('q', params.q);
  if (params?.minPrice) searchParams.append('minPrice', params.minPrice.toString());
  if (params?.maxPrice) searchParams.append('maxPrice', params.maxPrice.toString());
  if (params?.category) searchParams.append('category', params.category);
  if (params?.sortBy) searchParams.append('sortBy', params.sortBy);
  if (params?.sortOrder) searchParams.append('sortOrder', params.sortOrder);

  const url = `${API_BASE_URL}/api/products/search${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
  
  const response = await fetch(url);
  return response.json();
}

// Fetch product categories
export async function fetchCategories(): Promise<ApiResponse<CategoriesResponse>> {
  const response = await fetch(`${API_BASE_URL}/api/products/categories`);
  return response.json();
}

// Helper function to handle API errors
export function handleApiError(error: any): string {
  if (error?.message) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}
