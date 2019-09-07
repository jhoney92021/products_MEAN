import { Injectable } from '@angular/core';
//IMPORT FOR HTTP CLIENT
import { HttpClient } from '@angular/common/http';
//IMPORT FOR HTTP CLIENT

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  getProducts(){
    return this._http.get('/product');/*get all*/
  }
  getOneProduct(id){
    return this._http.get(`/product/${id}`);/*get a product*/
  }
  makeProduct(newProduct){
    return this._http.post('/product', newProduct);/*make product*/
  }
  deleteProduct(id){
    return this._http.delete(`/product/${id}`);/*delete product*/
  }
  editProduct(id, changes){
    return this._http.patch(`/product/${id}`, changes);/*edit product*/
  }
}
