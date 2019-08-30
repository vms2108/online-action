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

  public newComment: string;

  public newRating: number;

  public isReviewHidden = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    ) {
      // tslint:disable-next-line: radix
      const prodId = parseInt(route.snapshot.params.productId);
      this.product = productService.getProductById(prodId);
      this.reviews = productService.getReviewsForProduct(this.product.id);
   }

   public addReview(): void {
    const review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log('Adding reviews ' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
   }

   public averageRating(reviews: Review[]): number {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
   }

   public resetForm(): void {
     this.newRating = 0;
     this.newComment = null;
     this.isReviewHidden = true;
   }

}
