import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule} from '@angular/router';
import {route} from './app.route';

import { AppComponent } from './app.component';
import {CommonService} from './service/common.service';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import {KeysPipe} from './pipe/key.pipe';
import { HideColumnDirective } from './Shared/hide-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    ProductdetailsComponent,KeysPipe, HideColumnDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(route)
  ],
  providers: [CommonService,KeysPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
