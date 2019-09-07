import { Component, OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from '../http.service';
//IMPORT FOR HTTP SERVICE'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newProduct:any;
  /*REQUIRED TO INTIALIZE SERVICE*/
  constructor(private _httpService: HttpService){};
  /*REQUIRED TO INTIALIZE SERVICE*/

  ngOnInit() {
    this.newProduct = {title:"",price:0,image:""}
  }
  giveProductToService(){
    this._httpService.makeProduct(this.newProduct)
      .subscribe(d => this.newProduct = d);
  }
}
