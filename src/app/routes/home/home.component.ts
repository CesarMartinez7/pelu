import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';
import Swal from 'sweetalert2';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Form,
  Validators
} from '@angular/forms';

interface FormArray {
  label: string;
  type: string;
  formname: string;
}

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  activate: boolean = false;
  scrollingState = signal('activo');

  // Evento para el cambio de scrolling

  scrolling() {
    window.addEventListener('scroll', () => {
      this.scrollingState.set('activo2');
    });
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.scrolling();

    this.form = fb.group({
      nombre_peludo: '',
      edad: '',
      mes: '',
      raza_peludo: '',
      primer_nombre_tomador: '',
      segundo_nombre_tomador: '',
      primer_apellido_tomador: '',
      segundo_apellido_tomador: '',
      tipo_documento: '',
      numero_documento: '',
      correo: ["",[Validators.email]],
    });
  }

  formArray: FormArray[] = [
    { label: 'Nombre del peludo', type: 'text', formname: 'nombre_peludo' },
    { label: 'Edad', type: 'number', formname: 'edad' },
    { label: 'Mes', type: 'text', formname: 'mes' },
    { label: 'Raza del peludito', type: 'text', formname: 'raza_peludo' },
    { label: 'Primer nombre', type: 'text', formname: 'primer_nombre_tomador' },
    { label: 'Segundo Nombre', type: 'text', formname: 'segundo_nombre_tomador' },
    { label: 'Primer apellido', type: 'text', formname: 'primer_apellido_tomador' },
    { label: 'Segundo apellido', type: 'text', formname: 'segundo_apellido_tomador' },
    { label: 'Tipo de documento', type: 'text', formname: 'tipo_documento' },
    { label: 'Numero de documento', type: 'number', formname: 'numero_documento' },
    { label: 'Correo electrónico', type: 'email', formname: 'correo' },
  ];

  validarData(){
    if (this.form.invalid) {
      Swal.fire({
        title: 'ATENCIÓN',
        text: 'Debe llenar todos los campos en rojo',
        confirmButtonText: 'ENTENDIDO',
        imageUrl: 'images/campana.png',
        customClass: {
          popup: 'popover',
          title: 'title font-extrabold',
          confirmButton: 'btn-yellow',
          
        },
      });
    } else {
      Swal.fire({
        title: '¡Correo enviado exitosamente!',
        icon: 'success',
        confirmButtonText: "ENTENDIDO",
        draggable: true,
        customClass: {
          popup: 'popover',
          title: 'title',
          confirmButton: "btn-yellow"
        
        },
      });
    }
    console.log(this.form.value);
  
  }
  
  handleClickActivate() {
    this.activate = !this.activate;
  }
}
