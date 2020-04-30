import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public dia: number = new Date().getDate();
  public mes: number = new Date().getMonth();
  public year: number = new Date().getFullYear();
}
