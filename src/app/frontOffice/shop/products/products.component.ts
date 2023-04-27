import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!:any[];
  constructor(private service:ShopServiceService){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      console.log(res)
      this.products=res})
}
getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}


}
