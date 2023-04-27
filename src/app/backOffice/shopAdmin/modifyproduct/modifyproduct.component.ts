import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent {
  constructor(private http: HttpClient) { }
  

}
