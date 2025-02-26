import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // For making HTTP requests
import { AppComponent } from './app.component';           // Only AppComponent
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,         // The only component you're using
  ],
  imports: [
    BrowserModule,        // For running Angular in the browser
    HttpClientModule, FormsModule      // To make HTTP requests
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // This bootstraps the AppComponent
})
export class AppModule { }
