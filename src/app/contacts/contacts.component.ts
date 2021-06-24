import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact : any;
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts()
    .subscribe(data=>{
      this.contact=data;
      console.log(this.contact);
      
      
    }, err =>{
      console.log(err);
      
    })
  }

}
