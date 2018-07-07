import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

server = "http://127.0.0.1:8000";

headers: Headers = new Headers;
options: any;
  constructor(private http:Http) {

this.headers.append('encypt', 'multipart/form-data');
this.headers.append('Content-Type', 'application/Json');
this.headers.append('X-Requested-With', 'XMLHttpRequest');
  this.options = new RequestOptions({headers: this.headers}); 

   }

   addRegister(info){
var data = JSON.stringify(info);

  return this.http.post(this.server+"addregister", data,this.options).map(
res=> res.json()


  );


   }
}
