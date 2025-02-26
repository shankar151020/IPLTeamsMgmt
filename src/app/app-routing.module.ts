import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

// Import your components here
//import { HomeComponent } from './home/home.component';  
//import { AboutComponent } from './about/about.component';

const routes: Routes = [

  // { path: '', component: HomeComponent },  // Default route (Home)
  // { path: 'about', component: AboutComponent }  // About route

  { path: 'add', component: AddComponent },  // Map 'add' route to AddComponent
  { path: '', redirectTo: '/add', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure the routes
  exports: [RouterModule]  // Export the RouterModule so it can be used in the main AppModule
})
export class AppRoutingModule { }
