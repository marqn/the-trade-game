import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationComponent} from "./views/navigation/navigation.component";
import {CityChooserComponent} from "./views/city-chooser/city-chooser.component";
import {InfobarComponent} from "./views/infobar/infobar.component";
import {ContentComponent} from "./views/content/content.component";
import {FooterComponent} from "./views/footer/footer.component";
import {StoreComponent} from "./views/store/store.component";
import {ProductsComponent} from "./views/productsPage/products.component";
import {ProductComponent} from "./views/productsPage/product/product.component";
import {BuyComponent} from "./views/buy/buy.component";
import {EndpageComponent} from "./views/endpage/endpage.component";
import {game} from "./stores/gamestore";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CityService} from "./services/city.service";
import { StartpageComponent } from './views/startpage/startpage.component';
import {cityStore} from "./stores/city.store";
import {selectedProduct} from "./stores/selectedProduct";
import { SellProductsComponent } from './views/sell-products/sell-products.component';

const appRoutes:Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'buy', component: BuyComponent
  },
  {
    path: 'sell', component: SellProductsComponent
  },
  {
    path: 'store', component: StoreComponent
  },
  {
    path: 'city-chooser', component: CityChooserComponent
  },
  {
    path: 'endpage', component: EndpageComponent
  },
  {
    path: '', component: StartpageComponent
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
    BuyComponent,
    EndpageComponent,
    StartpageComponent,
    SellProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ game, cityStore, selectedProduct}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
