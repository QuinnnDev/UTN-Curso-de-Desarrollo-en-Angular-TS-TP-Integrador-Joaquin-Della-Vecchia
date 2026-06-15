import { Routes } from '@angular/router';
import { Inicial } from './components/inicial/inicial';

/*
ACA marcamos las rutas de la aplicacion 
*/

export const routes: Routes = [
  {
    path: '',
    component: Inicial,
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuarios/usuarios-module').then((modules) => modules.UsuariosModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos-module').then((modules) => modules.ProductosModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
