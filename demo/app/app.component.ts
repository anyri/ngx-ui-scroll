import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Datasource } from '../../public_api';
// import { Datasource } from 'ngx-ui-scroll';

const getData = (index: number, count: number)  => {
  console.log('requested index = ' + index + ', count = ' + count);
  let data = [];
  for (let i = index; i <= index + count - 1; i++) {
    data.push({
      id: i,
      text: "item #" + i
    });
  }
  return data;
};

const datasourceGet = {
  'callback': (index: number, count: number, success) => {
    setTimeout(() => success(getData(index, count)), 100);
  },
  'observable': (index: number, count: number) => Observable.create(observer => {
    setTimeout(() => observer.next(getData(index, count)), 100);
  }),
  'promise': (index: number, count: number) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(getData(index, count)), 100);
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public datasource: Datasource = {
    get: datasourceGet['observable'],
    settings: {
      bufferSize: 5,
      padding: 0.5
    }
  };

  constructor() {
  }

}
