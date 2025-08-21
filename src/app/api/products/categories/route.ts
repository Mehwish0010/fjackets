import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, getProductsByCategory } from '@/data/products';

export async function GET(request: NextRequest) {
  try {
    const allProducts = getAllProducts();
    
    // Get men's products
    const mensProducts = getProductsByCategory('men');
    
    // Get women's products
    const womensProducts = getProductsByCategory('women');

    const categories = [
      {
        id: 'all',
        name: 'All Products',
        count: allProducts.length,
        slug: 'all'
      },
      {
        id: 'mens',
        name: "Men's Jackets",
        count: mensProducts.length,
        slug: 'mens'
      },
      {
        id: 'womens',
        name: "Women's Jackets",
        count: womensProducts.length,
        slug: 'womens'
      }
    ];

    return NextResponse.json({
      success: true,
      data: {
        categories,
        totalProducts: allProducts.length
      }
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
