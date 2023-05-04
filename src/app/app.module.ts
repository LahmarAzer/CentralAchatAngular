import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { AdduserComponent } from './backOffice/user/adduser/adduser.component';
import { ProductsComponent } from './frontOffice/shop/products/products.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';
import { ListproductsComponent } from './backOffice/shopAdmin/listproducts/listproducts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsproductComponent } from './frontOffice/shop/detailsproduct/detailsproduct.component';
import { RecommandedproductsComponent } from './frontOffice/shop/recommandedproducts/recommandedproducts.component';
import { QrCodeServiceComponent } from './frontOffice/shop/qr-code-service/qr-code-service.component';
import { ListeFavorisComponent } from './frontOffice/shop/liste-favoris/liste-favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    FooterComponent,
    AllTemplateUserComponent,
    BodyComponent,
    HeaderComponent,
    AddDeliveryComponent,
    DeliverysmenComponent,
    DeliverysComponent,
    ListuserComponent,
    AdduserComponent,
    ProductsComponent,
    AddproductComponent,
    ModifyproductComponent,
    ListproductsComponent,
    DetailsproductComponent,
    RecommandedproductsComponent,
    QrCodeServiceComponent,
    ListeFavorisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
