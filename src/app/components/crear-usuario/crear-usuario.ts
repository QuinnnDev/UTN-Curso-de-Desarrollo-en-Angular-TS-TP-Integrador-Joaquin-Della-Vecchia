import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuarios } from '../../services/usuarios';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.css',
  standalone: false,
})
export class CrearUsuario {
  register_form: FormGroup;

  private usuariosService = inject(Usuarios);

  //este constructor se invoca al instancia el componente
  //Recien ahi angular nos pasara el objeto form builder para usar
  constructor(private fb: FormBuilder) {
    this.register_form = this.fb.group({
      nombre: [
        '', //valor inicial
        [Validators.required, Validators.minLength(3)], //validadores
      ],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required, Validators.minLength(4)]],
      date: ['', [Validators.required]],
      money: [0, [Validators.required, Validators.min(0)]],
      status: [false],
    });
  }

  submitRegisterForm() {
    this.usuariosService.addUser({
      nombre: this.register_form.value.nombre,
      correo: this.register_form.value.email,
      rol: this.register_form.value.role,
      fechaNacimiento: new Date(this.register_form.value.date),
      dinero: this.register_form.value.money,
      IsOnline: this.register_form.value.status,
    });
    console.log('Se envio el formulario de registro', this.register_form.value);
  }

  getRegisterFormError(field_name: string) {
    const register_form_control = this.register_form.get(field_name);

    //si el usuario no toca el campo, no muestra nada
    if (!register_form_control?.touched) {
      return '';
    }

    //no mostrar nada si no hay errores
    if (!register_form_control) {
      return '';
    }
    //mostrar errores si no escribe nada
    if (register_form_control.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    //mostrar errores si no cumple el largo minimo
    if (register_form_control.hasError('minlength')) {
      const minLength = register_form_control.errors?.['minlength'].requiredLength;
      return `Este campo debe tener al menos ${minLength} caracteres`;
    }

    return '';
  }
}
