import { Component, OnInit, ElementRef } from '@angular/core';
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
  input:any;
  progressbar:boolean=true;
  selector:boolean=true;

  constructor(private CS: CommonService, private ele : ElementRef) { 
  }

  ngOnInit() {
    this.url = window.location.pathname;
    this.CS.getService(this.baseUrl+this.url).subscribe(
      data => {
        this.progressbar = !this.progressbar;
        this.output = data.products;
         if(this.output == undefined){
          this.count=0;
        }
      },
      err => {
        this.progressbar = !this.progressbar;
        console.log(err);
      }
    );
  }

 filter(output,input){
   var index = input.getAttribute('index'); console.log(index);
   var filter = input.value.toUpperCase();
   var table = this.ele.nativeElement;
   var tr = table.getElementsByClassName('data');
   console.log(tr);
    for (let i = 0; i < tr.length; i++) {
   var td = tr[i].getElementsByTagName("td")[index];
    console.log(td);
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }

 }
 toggleselector(){
    this.selector = !this.selector;
 }

}
