import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RegisterService } from './services/register.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ImageUploadModule.forRoot()
      ],
  providers: [RegisterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
