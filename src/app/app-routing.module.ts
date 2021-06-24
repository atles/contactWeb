import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'', redirectTo:'/about', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
