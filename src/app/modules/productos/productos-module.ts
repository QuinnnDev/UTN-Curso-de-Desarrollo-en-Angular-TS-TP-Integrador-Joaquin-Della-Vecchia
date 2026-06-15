import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from './productos';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { ProductosRoutingModule } from './productos-routing-module';
import { ListaProductos } from '../../components/lista-productos/lista-productos';

@NgModule({
  declarations: [Productos, DetalleProducto],
  imports: [CommonModule, ProductosRoutingModule, ListaProductos],
})
export class ProductosModule {}
