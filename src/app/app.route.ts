import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { Routes } from '@angular/router';


export const route:Routes = [
    {path:'getuserdetails', component:UserdetailComponent},
    {path:'getproductdetails', component:ProductdetailsComponent}
    ]