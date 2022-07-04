import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyrevPipe } from './myrev.pipe';
import { MyaddPipe } from './myadd.pipe';
import { MymultiPipe } from './mymulti.pipe';
import { MarvellouschkPipe } from './marvellouschk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyrevPipe,
    MyaddPipe,
    MymultiPipe,
    MarvellouschkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
