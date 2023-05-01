import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';
import { Product } from 'src/app/frontOffice/model/Product';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
  products!:any[];
  constructor(private service:ShopServiceService,private router: Router){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      console.log(res)
      this.products=res})
}

deleteProduct(product: any): void {
  const idUser=1;
  if (confirm('Are you sure you want to delete this post?')) {
    this.service.deleteProduct(product.idProduct, idUser).subscribe(() => {
      this.products = this.products.filter(p => p !== product);
    });
  }
}
}