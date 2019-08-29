import { ProductService } from './../../services/product-service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}
