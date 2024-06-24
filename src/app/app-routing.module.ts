import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'SignIn', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
