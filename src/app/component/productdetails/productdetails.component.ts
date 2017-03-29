import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  baseUrl: string = 'http://demo3277623.mockable.io/api';
  url:string;
  output:any;
  count:number;
  constructor(private CS: CommonService) { 
  }

  ngOnInit() {
    this.url = window.location.pathname;
    this.CS.getService(this.baseUrl+this.url).subscribe(
      data => {
        this.output = data.products;
         if(this.output == undefined){
          this.count=0;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
