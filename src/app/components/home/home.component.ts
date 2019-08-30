import { ProductService } from './../../services/product-service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product-service';
import { FilterPipe } from 'src/app/pipes/filter-pipe';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public titleFilter = new FormControl();
  public filterCriteria: string;

  constructor(
    private productService: ProductService,
  ) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error)
      );
  }

  ngOnInit() {
  }

}
