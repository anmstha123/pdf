import { SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'enviroment';

export const supabaseAdmin = new SupabaseClient(
  environment.supabaseUrl,
  environment.supabaseKey
);

export async function getAllProduct() {
  const { data: allProducts, error } = await supabaseAdmin
    .from('product')
    .select('*');
  return [allProducts, error];
}

export async function getFeaturedProducts() {
  const { data: featuredProducts, error } = await supabaseAdmin
    .from('featured_products')
    .select('product(name,price,description)');
  return [featuredProducts, error];
}
