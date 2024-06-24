import { Component, OnInit } from '@angular/core';
import { supabaseAdmin, getAllProduct, getFeaturedProducts } from 'supabase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = null;
  productsError: any = null;
  imgURL: any = 'asdf.jpg';

  featuredProducts: any = null;
  featuredProductsError: any = null;

  async ngOnInit() {
    [this.products, this.productsError] = await getAllProduct();
    [this.featuredProducts, this.featuredProductsError] =
      await getFeaturedProducts();
    console.log(this.featuredProducts[0]);
  }
}
