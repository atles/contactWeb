import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos:any;
  size:number=5;
  currentPage:number;
  totalPages:number;
  listPages:Array<number>=[];

  constructor(private http:HttpClient, private galleryService:GalleryService) { }

  ngOnInit() {    
  }
  motCle:string;
  onSearch(){
   this.galleryService.onSearch(this.motCle, this.size, this.currentPage)
  .subscribe(data=>{
    this.photos=data;
    console.log(this.photos);
    //~~ c'est pour la division entiere
    this.totalPages=~~(this.photos.totalHits/this.size);    
    // oubien pour la division entière
    // this.totalPages=Math.floor(this.photos.totalHits/this.size);
    if (this.totalPages%this.size!=0)
      ++this.totalPages;
      console.log(this.totalPages);
      this.listPages=new Array(this.totalPages)
    
  }, err=>{
    console.log(err);
    
  })
}
goToPage(i){
  this.currentPage=i+1;
  this.onSearch();
}

}

   
