import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  getContacts(){
    return this.http.get("http://localhost:8080/contacts")
   // .pipe(map(resp=>{}))
  }
}
