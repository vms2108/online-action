import { ProductService } from './../../services/product-service';
import { Product, Review } from 'src/app/services/product-service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  public product: Product;

  public reviews: Review[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    ) {
      // tslint:disable-next-line: radix
      const prodId = parseInt(route.snapshot.params.productId);
      this.product = productService.getProductById(prodId);
      this.reviews = productService.getReviewsForProduct(this.product.id);
   }

}
