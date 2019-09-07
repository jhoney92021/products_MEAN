import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';

//FOR SERVICE TO CLIENT
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
//FOR SERVICE TO CLIENT
//FOR FORM MODEL USE
import { FormsModule } from '@angular/forms';
//FOR FORM MODEL USE

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //add for client
    HttpClientModule,
    //add for forms
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
