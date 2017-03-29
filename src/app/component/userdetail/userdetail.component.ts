import { Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {
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
        this.output = data.users;
        if(this.output == undefined){
          this.count = 0;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
