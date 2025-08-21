import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, getProductsByCategory } from '@/data/products';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search');

    let products = category && category !== 'all' 
      ? getProductsByCategory(category as 'men' | 'women')
      : getAllProducts();

    // Apply search filter if provided
    if (search) {
      products = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / limit);

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        pagination: {
          currentPage: page,
          totalPages,
          totalProducts: products.length,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
