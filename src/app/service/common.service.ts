import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CommonService {

  constructor(private http : Http) { }
  getService(url){
    return this.http.get(url).map((res: Response) => { return res.json(); });
  }
}
