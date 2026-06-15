import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarios } from '../../components/lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { Usuarios } from './usuarios';
import { CrearUsuario } from '../../components/crear-usuario/crear-usuario';

const routes: Routes = [
  {
    path: '',
    component: Usuarios,
  },
  {
    path: 'crear',
    component: CrearUsuario,
  },
  {
    path: ':id',
    component: DetalleUsuario,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
