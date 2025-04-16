import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface FormArray{
  label: string
  type: string
}

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activate: boolean = false
  indexActivate : number | string = 0


  formArray: FormArray[] = [
    { label: "Nombre del peludo", type: "text" },
    { label: "Edad", type: "number" },
    { label: "Mes", type: "text" },
    { label: "Raza del peludito", type: "text" },
    { label: "Primer nombre", type: "text" },
    { label: "Segundo Nombre", type: "text" },
    { label: "Primer apellido", type: "text" },
    { label: "Segundo apellido", type: "text" },
    { label: "Tipo de documento", type: "text" },
    { label: "Numero de documento", type: "number" },
    { label: "Correo electrónico", type: "email" },
  ];



  handleClickActivate(){
    this.activate = !this.activate
  }

};    