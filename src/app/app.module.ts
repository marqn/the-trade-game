import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { CityChooserComponent } from './views/city-chooser/city-chooser.component';
import { InfobarComponent } from './views/infobar/infobar.component';
import { ContentComponent } from './views/content/content.component';
import { FooterComponent } from './views/footer/footer.component';
import { StoreComponent } from './views/store/store.component';
import { ProductsComponent } from './views/productsPage/products.component';
import { ProductComponent } from './views/product/product.component';
import { BuyComponent } from './views/buy/buy.component';
import {game} from "./stores/gamestore";

import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

const appRoutes:Routes = [
  {
    path: 'products', component:ProductsComponent
  },
  {
    path:'buy', component:BuyComponent
  },
  {
    path:'sell', component:BuyComponent
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
    ProductComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({game}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
