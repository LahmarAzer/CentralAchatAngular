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

  addRating(rating: Rating, productId: number, userId: number): Observable<Rating> {
    return this.http.post<Rating>(`${this.baseUrl}/${productId}/${userId}`, rating);
  }
  updateRating(rating: Rating, ratingId: number, userId: number): Observable<Rating> {
    return this.http.put<Rating>(`${this.baseUrl}/${ratingId}/${userId}`, rating);
  }
 
}
