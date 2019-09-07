import { Component, /*for implementation*/ OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from './http.service';
//IMPORT FOR HTTP SERVICE'
//IMPORT ROUTER
import { Router } from '@angular/router';
//IMPORT ROUTER

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
implements OnInit 
{
    title = "Dojo Junk Store!!";
    allProducts:any;
    Product:any;
    newProduct:any;
    toEdit:any;
    toDelete:any;
    /*REQUIRED TO INTIALIZE SERVICE*/
    constructor(private _httpService: HttpService, private router: Router){};
    /*REQUIRED TO INTIALIZE SERVICE*/
    ngOnInit()
    {
      this.router.navigate([''])
      this.newProduct = {title:"",price:0,image:""}
      this.toEdit = {title:"",price:0,image:""}
    }
    getProductsFromService(){
      this._httpService.getProducts()
        .subscribe(data => this.allProducts = data);
    }
    getOneProductFromService(idx){
      this._httpService.getOneProduct(this.allProducts[idx]._id)
        .subscribe(d => this.Product = d);
    }
    giveProductToService(newProduct){
      this._httpService.makeProduct(newProduct)
        .subscribe(d => newProduct = d);
    }
    removeProductFromService(id){
      this._httpService.deleteProduct(id)
        .subscribe(d => this.toDelete = d);
    }
    updateProductInService(id, toEdit){
      this._httpService.editProduct(id, toEdit)
        .subscribe(d => this.toEdit = d)
    }
}
