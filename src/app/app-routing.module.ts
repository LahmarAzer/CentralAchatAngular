import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { AdduserComponent } from './backOffice/user/adduser/adduser.component';
import { ProductsComponent } from './frontOffice/shop/products/products.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';

const routes: Routes = [{

  
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'admin',
      component:BodyAdminComponent
    },
    {
      path:'adddelivery',
      component:AddDeliveryComponent
    },
    {
      path:'deliverysmen',
      component:DeliverysmenComponent
    },
    {
      path:'deliverys',
      component:DeliverysComponent
    },
    {
      path:'listeusers',
      component:ListuserComponent
    },
    {
      path:'addproduct',
      component:AddproductComponent
    },
    {
      path:'modifyproduct',
      component:ModifyproductComponent
    }
  ]

},
{
  path:'',
  component:AllTemplateUserComponent,
  /*children:[
    {
      path:'admin',
      component:BodyAdminComponent
    }
  ]*/

},

{
  path:'signup',
  component: AdduserComponent
},

{
  path:'front',
  component: AllTemplateUserComponent,
  children:[
    {
      path:'shop',
      component: ProductsComponent
    }
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
