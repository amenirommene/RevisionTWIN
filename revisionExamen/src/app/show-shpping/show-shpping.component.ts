import { Router } from '@angular/router';
import { ProductService } from './../Service/ProductService';
import { Product } from './../entity/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-shpping',
  templateUrl: './show-shpping.component.html',
  styleUrls: ['./show-shpping.component.css']
})
export class ShowShppingComponent {
  products: Product[] = [];


  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
    this.fetchData();
  }

  private fetchData(): void {
    this.productService.getCarts()
      .subscribe((data: any) => {
        console.log('data', data);
        this.products = data;
      });
}
}
