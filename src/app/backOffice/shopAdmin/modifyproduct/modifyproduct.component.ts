import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';
import { Product } from 'src/app/frontOffice/model/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent {
  
  product!: Product ;

  constructor(
    private route: ActivatedRoute,
    private shopservice: ShopServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.shopservice.getProductById(id)
      .subscribe(product => this.product = product);
  }

  updateproduct(): void {
    const idUser=1;
    this.shopservice.updatePost(this.product,idUser)
      .subscribe(
        () => console.log('product updated successfully'),
        error => console.log(error)
      );
      this.router.navigate(['/admin/listproducts']);

  }
  
}
