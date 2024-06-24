import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CarouselMDBComponent } from './components/carousel-mdb/carousel-mdb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { AppPdfViewerComponent } from './components/app-pdf-viewer/app-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavbarComponent,
    ContactComponent,
    ProductComponent,
    AuthComponent,
    AppPdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselMDBComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
