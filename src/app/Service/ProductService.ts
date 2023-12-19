import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../entity/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'; // Removed trailing slash

  constructor(private http: HttpClient) {}

 getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  getCarts(): Observable<Product[]> {
    const url = `${this.apiUrl}/cart`;
    return this.http.get<Product[]>(url);
  }


  addProductToCart(product: any): Observable<any> {
    const cartUrl = `${this.apiUrl}/cart`;
    return this.http.post(cartUrl, product);
  }

  getProductById(productId: string): Observable<any> {
    const productUrl = `${this.apiUrl}/products/${productId}`;
    return this.http.get<any>(productUrl);
  }
  addProduct(product: any): Observable<any> {
    const addProductUrl = `${this.apiUrl}/products`;
    return this.http.post(addProductUrl, product);
  }
}
