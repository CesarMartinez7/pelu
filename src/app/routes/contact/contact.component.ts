import Swal from 'sweetalert2';
import {
  FormControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';

import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formulario: FormGroup;

  constructor(fb: FormBuilder) {
    this.formulario = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [
          Validators.maxLength(10),
          Validators.required,
          Validators.minLength(10),
        ],
      ],
      descripcion: ['', [Validators.maxLength(255), Validators.minLength(5)]],
    });
  }

  validarDatos() {
    if (this.formulario.invalid) {
      Swal.fire({
        title: 'ATENCIÓN',
        text: 'Debe llenar todos los campos en rojo',
        confirmButtonText: 'ENTENDIDO',
        imageUrl: 'images/campana.png',
        customClass: {
          popup: 'popover',
          title: 'title font-bold',
          confirmButton: 'btn-yellow',
        },
      });
    } else {
      Swal.fire({
        title: 'Enviado con exito!',
        icon: 'success',
        draggable: true,
        customClass: {
          popup: 'popover',
          title: 'title',
        },
      });
    }
    console.log(this.formulario.value);
  }
}
