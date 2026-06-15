import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleProducto } from './detalle-producto/detalle-producto';
import { Productos } from './productos';

const routes: Routes = [
  {
    path: '',
    component: Productos,
  },
  {
    path: ':id',
    component: DetalleProducto,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
