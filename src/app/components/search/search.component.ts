import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public formModel: FormGroup;

  public categories: string[];

  constructor(
    private productService: ProductService,
  ) {
    this.categories = this.productService.getAllCategories();
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: [null, Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: [-1],
    });
   }

  ngOnInit() {
  }

  public positiveNumberValidator(control: FormControl): any {
    if (!control.value) { return null; }
    // tslint:disable-next-line: radix
    const price = parseInt(control.value);
    return price === null || typeof price === 'number' && price > 0
    ? null : {positivenumber: true};
   }

}
