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
  hidecolumn:boolean=false;
  error:boolean=true;
  stockArray:string[]=[];
  

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
        if(err.status !== 200){
          this.error = false;
        }
        else{this.error=true;}
      }
    );
  }

 filter(output,input){
   var index = input.getAttribute('index');
   var filter = input.value.toUpperCase();
   var table = this.ele.nativeElement;
   var tr = table.getElementsByClassName('data');
    for (let i = 0; i < tr.length; i++) {
   var td = tr[i].getElementsByTagName("td")[index];
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
 checkbox(table,check){
  
  check.selected = (check.selected) ? false : true;
   
    var chk_colname = check.getAttribute('column-name');
    if(check.selected)
    {
      this.stockArray.push(chk_colname);
    }else{
      this.stockArray.splice(this.stockArray.indexOf(chk_colname),1);
    }
    var ele = table.querySelectorAll('[column-name]').forEach(item=>{
      let tt=item.getAttribute('column-name');
      if( (this.stockArray.indexOf(tt)>-1))
      {
        item.style.display="none";
      }else{
        item.style.display="";
      }
   }); 

 }

}
