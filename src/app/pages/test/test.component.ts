import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  methodList = ['get', 'post'];
  method = 'post';
  request_url = '';
  listOfData: any[] = [];

  constructor(
    private  http: HttpClient
  ) { }

  ngOnInit() {
    this.listOfData = [{
      param: '',
      value: ''
    }, {
      param: '',
      value: ''
    }];
  }
  // 新增行
  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        param: '',
        value: ''
      }
    ];
  }
  // 发送
  submitForm() {
    console.log(this.listOfData);
    console.log('submitForm');
  }
}
