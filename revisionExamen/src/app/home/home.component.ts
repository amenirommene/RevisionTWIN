import { ProductService } from './../Service/ProductService';
import { Product } from './../entity/Product';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];


  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.productService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  buyProduct(product: Product): void {
    this.productService.addProductToCart(product).subscribe({
      next: () => {
        alert ("product added with success");;
      },
      error : () => {
        alert ("product already exist");
      }
    })
   /* this.productService.addProductToCart(product).subscribe({
      next: () => {
        console.log('Product added to the cart successfully.');
      },
      error: (err: any) => console.error(err),

    });*/
  }
  viewDetails(product: Product): void {
    this.router.navigate(['/details', product.id]);
  }

}
