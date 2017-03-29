import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  value: any;
  thatkeys: any[] = [];
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      this.thatkeys = [];
      let tempObj = value[key];
      for (let prop in tempObj) {
        if (typeof tempObj[prop] == "object") {
          this.getkeys(tempObj[prop]);
        } else {
          this.thatkeys.push({ key: prop, value: tempObj[prop] });
        }
      }
      keys.push(this.thatkeys);
    }
    return keys;
  }
  getkeys(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] == "object") {
        this.getkeys(obj[prop]);
      }
      else {
        this.thatkeys.push({ key: prop, value: obj[prop] });
      }
    }
  }
}
