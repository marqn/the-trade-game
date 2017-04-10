import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CityChooserComponent } from './city-chooser/city-chooser.component';
import { InfobarComponent } from './infobar/infobar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './productsPage/products.component';
import { ProductComponent } from './product/product.component';

const appRoutes:Routes = [
  {
    path: 'products', component:ProductsComponent
  },
  {
    path: 'store', component:StoreComponent
  },
  {
    path: 'city-chooser', component:CityChooserComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CityChooserComponent,
    InfobarComponent,
    ContentComponent,
    FooterComponent,
    StoreComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
