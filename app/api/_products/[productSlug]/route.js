// app/api/products/[productSlug]/route.js
import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { productSlug } = await params;

  try {
    // Fetch the product
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('*')
      .eq('product_slug', productSlug)
      .eq('is_active', true)
      .single();

    if (productError || !product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Fetch variants if pricing_type is not fixed
    let variants = [];
    if (product.pricing_type !== 'fixed') {
      const { data: variantData, error: variantError } = await supabase
        .from('product_variants')
        .select('*')
        .eq('product_id', product.product_id)
        .eq('is_available', true)
        .order('sort_order');

      if (variantError) {
        console.error('Variant fetch error:', variantError);
      } else {
        variants = variantData || [];
      }
    }

    return NextResponse.json({ ...product, variants });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}