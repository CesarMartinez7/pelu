import { Component } from '@angular/core';

interface RoutesType{
  name: string
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  routes: RoutesType[] = [
    { name: "¿Por qué?" },
    { name: "Nuestros planes" },
    { name: "Club" },
    { name: "¿Quieres más info?" },
    { name: "Blog" },
    { name: "Asistencias" }
  ];
  
}
