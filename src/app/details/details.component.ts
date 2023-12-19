import { ProductService } from './../Service/ProductService';
import { Product } from './../entity/Product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product: Product = new Product();

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
          const productId = params.get('productId');
          if (productId) {
              this.fetchProductDetails(productId);
          }
      });
  }

  private fetchProductDetails(productId: string): void {
      this.productService.getProductById(productId).subscribe({
          next: (response: Product) => {
              this.product = response;
          },
          error: (err: any) => console.error(err),
      });
  }
}
