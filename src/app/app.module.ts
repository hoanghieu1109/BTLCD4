import { HomeModule } from './home/home.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';






@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    
  
  ],
  imports: [
    HttpClientModule,
    //HttpClient,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    
   
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
