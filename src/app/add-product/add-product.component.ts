import { ProductService } from './../Service/ProductService';
import { Product } from './../entity/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  showSuccessMessage = false;
  product: Product = new Product();

  constructor(private productService: ProductService) {}


  addProduct(): void {

      this.productService.addProduct(this.product).subscribe(
        response => {

          // Reset the form
          this.product = new Product();
          alert('Product added successfully');

    })
  }

  /*isFormValid(): boolean {
    this.formErrors = {
      nameRequired: false,
      priceNumeric: false,
      descriptionLength: false
    };

    let isValid = true;

    if (!this.product.name) {
      this.formErrors.nameRequired = true;
      isValid = false;
    }

    if (isNaN(this.product.price)) {
      this.formErrors.priceNumeric = true;
      isValid = false;
    }

    if (this.product.description.length < 10) {
      this.formErrors.descriptionLength = true;
      isValid = false;
    }

    return isValid;
  }*/

}
