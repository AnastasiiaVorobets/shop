import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CartModule } from './components/cart/cart.module';
import { CartService } from './services/cart.service';
import { SidebarService } from './services/sidebar.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CatalogModule,
    CartModule,
  ],
  providers: [CartService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
