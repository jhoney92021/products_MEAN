import { Component, OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from '../http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent 
  implements OnInit 
{
  allProducts:any;
  Product:any;
  toDelete:any;

  /*REQUIRED TO INTIALIZE SERVICE*/
  constructor(private _httpService: HttpService){};
  /*REQUIRED TO INTIALIZE SERVICE*/

  ngOnInit() {this.getProductsFromService()}

  getProductsFromService(){
    this._httpService.getProducts()
      .subscribe(data => this.allProducts = data);
  }
  getOneProductFromService(idx){
    this._httpService.getOneProduct(this.allProducts[idx]._id)
      .subscribe(d => this.Product = d);
  }
  removeProductFromService(id){
    this._httpService.deleteProduct(id)
      .subscribe(d => this.toDelete = d);
  }
}
