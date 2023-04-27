import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent {
  productId!: number;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ShopServiceService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProductById(this.productId);
  }

  getProductById(productId: number): void {
    this.productService.getProductById(productId)
      .subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
