import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowShppingComponent } from './show-shpping/show-shpping.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {
  path: 'add', component: AddProductComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cart', component: ShowShppingComponent },
{ path: 'details/:productId', component: DetailsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
