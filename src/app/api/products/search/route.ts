import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '@/data/products';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const minPrice = parseFloat(searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(searchParams.get('maxPrice') || '9999');
    const category = searchParams.get('category');
    const sortBy = searchParams.get('sortBy') || 'title';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    let products = getAllProducts();

    // Apply search filter
    if (query) {
      products = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply price filter
    products = products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );

    // Apply category filter
    if (category && category !== 'all') {
      products = products.filter(product =>
        product.title.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Apply sorting
    products.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'discount':
          aValue = parseFloat(a.discount.replace('% OFF', ''));
          bValue = parseFloat(b.discount.replace('% OFF', ''));
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (sortOrder === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      } else {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        products,
        totalResults: products.length,
        searchQuery: query,
        filters: {
          minPrice,
          maxPrice,
          category
        },
        sort: {
          by: sortBy,
          order: sortOrder
        }
      }
    });
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to search products' },
      { status: 500 }
    );
  }
}
