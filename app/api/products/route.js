// app/api/products/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }

    // For each product, fetch variants if any
    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        if (product.pricing_type !== 'fixed') {
          const { data: variants } = await supabase
            .from('product_variants')
            .select('*')
            .eq('product_id', product.product_id)
            .eq('is_available', true)
            .order('sort_order');
          
          return { ...product, variants: variants || [] };
        }
        return { ...product, variants: [] };
      })
    );

    return NextResponse.json(productsWithVariants);
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}