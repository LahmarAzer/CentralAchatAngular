import { Component } from '@angular/core';
import { RatingserviceService } from 'src/app/Service/shopService/ratingservice.service';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';
import { Rating } from '../../model/Rating';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!:any[];
  rating: Rating = new Rating();
  userId: number = 1; // mettre l'ID de l'utilisateur connecté ici
  isLoggedIn: boolean = false;
 
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 6;
  pagesToShow: number[] = [];
  idClient = 1;



  constructor(private service:ShopServiceService, private ratingService: RatingserviceService){}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      console.log(res)
      this.products=res
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.currentPage = 1;
      this.pagesToShow = this.getArrayOfPage(this.totalPages);

    })
}



getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}


getArrayOfPage(totalPage: number): number[] {
  const pageArray: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(i);
  }
  return pageArray;
}


nextPage() {
  this.currentPage++;
}

previousPage() {
  this.currentPage--;
}

goToPage(page: number) {
  this.currentPage = page;
}

ajouterProduitFavori(idProduit: number) {
  this.service.addFavori(this.idClient, idProduit).subscribe(
    data => {
      // Mettre à jour les produits
      const produit = this.products.find(p => p.idProduct === idProduit);
      produit.estDansFavoris = !produit.estDansFavoris;
    },
    error => console.log(error)
  );
}




}
