import { Component } from '@angular/core';
import {CommonService} from './service/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  list : any[];
  input:string;
  output:any;
  baseUrl: string = 'http://demo3277623.mockable.io/api/';
  constructor(private CS:CommonService,private router : Router){
   this.list = [{name:'Get User Details', value: 'getuserdetails'},
                {name:'Get Product Details', value:'getproductdetails'}];
  }
  callType(value){
    this.router.navigateByUrl(value);
    
  }
}
