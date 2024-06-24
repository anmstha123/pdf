import { Component, OnInit } from '@angular/core';
import { supabaseAdmin, getAllProduct } from 'supabase';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = null;
  imgURL: any = 'asdf.jpg';

  async ngOnInit() {
    this.products = await getAllProduct();
  }
}
