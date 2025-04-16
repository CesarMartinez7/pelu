import { Component, ElementRef, viewChild, Input, input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface RoutesType {
  name: string;
  id: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent {
  routes: RoutesType[] = [
    { name: '¿Por qué?', id: 'porque' },
    { name: 'Nuestros planes', id: 'planes' },
    { name: 'Club', id: 'club' },
    { name: '¿Quieres más info?', id: 'moreinfo' },
    { name: 'Blog', id: 'blog' },
    { name: 'Asistencias', id: 'asistencias' },
  ];

  
  @Input() isBig : string = "activo"

  scrollToWhy(id: string = 'porque') {
    const el = document.getElementById(id);
    console.log(el);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
