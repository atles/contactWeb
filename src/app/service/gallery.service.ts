import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  
  constructor(private http:HttpClient) { }
    onSearch(motCle:String, size:Number, page:Number ){    
    return this.http.get("http://pixabay.com/api/?key=13178950-e5354c6b0c76f26e4ef4d02b3&q="
                +motCle+"&per_page="+size+"&page="+page)
}

}
