import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/Header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ImagenComponent } from "./components/imagen/imagen.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ImagenComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
