import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { ListaUsuarios } from '../../components/lista-usuarios/lista-usuarios';
import { Usuarios } from './usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { CrearUsuario } from '../../components/crear-usuario/crear-usuario';

@NgModule({
  declarations: [Usuarios, DetalleUsuario, CrearUsuario],
  imports: [CommonModule, ReactiveFormsModule, UsuariosRoutingModule, ListaUsuarios],
})
export class UsuariosModule {}
