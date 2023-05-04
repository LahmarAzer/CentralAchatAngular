import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from 'src/app/frontOffice/model/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingserviceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:9009/store/raitingProduct';

  getProductRating(productId: number): Observable<number> {
    const url = `${this.baseUrl}/products/${productId}/rating`;
    return this.http.get<number>(url);
  }
 
  addRating(ratingProduct: any, productId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/rating/addRatingProduct/${productId}/${userId}`, ratingProduct);
  }
}
