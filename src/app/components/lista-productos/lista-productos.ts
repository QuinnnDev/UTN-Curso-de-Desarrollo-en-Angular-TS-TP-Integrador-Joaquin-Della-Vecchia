import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DescuentoPipe } from '../../pipes/descuento-pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Producto, Productos } from '../../services/productos';

@Component({
  selector: 'app-lista-productos',
  imports: [CurrencyPipe, DatePipe, DescuentoPipe, RouterLink],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  productosList: Producto[] = [];

  private productosService = inject(Productos);

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosList = this.productosService.getProducts();
  }

  agregarProductoSimulado() {

    //definir valores
    const nombres_ejemplo = [
      'Rolling Girl feat. Hatsune Miku',
      'Machine Love feat. Kasane Teto',
      'Yume no mata Yume feat. Mafumafu',
      'Sayonara Endroll feat. E ve',
      'Inochi ni kirawareteiru by Kanzaki Iori',
      'Hana ni ame Wo, kimi ni uta wo by Tsukuyomi'
    ];

        const descripcion_ejemplo = [
      'Cancion de Hatsune Miku',
      'Cancion de Kasane Teto',
      'Cancion de Mafumafu',
      'Cancion de E ve',
      'Cancion de Kanzaki Iori',
      'Cancion de Tsukuyomi'
    ];

    const precios_ejemplo = [1750, 2100, 2000, 1800, 2700, 2200];
    const descuentos_ejemplo = [0, 0, 0, 0, 15, 30, 40, 50];

    //aplicar valores

    const numero_producto_aleatorio = Math.floor(Math.random() * nombres_ejemplo.length);
    const nombre_aleatorio = nombres_ejemplo[numero_producto_aleatorio];

    const descripcion_aleatoria = descripcion_ejemplo[numero_producto_aleatorio];


    const precio_aleatorio = precios_ejemplo[numero_producto_aleatorio];
    const descuento_aleatorio = descuentos_ejemplo[Math.floor(Math.random() * descuentos_ejemplo.length)];


    const producto_simulado: Omit<Producto, 'id'> = {
      nombre: nombre_aleatorio,
      descripcion: descripcion_aleatoria.toString(),
      precio: precio_aleatorio,
      descuento: descuento_aleatorio,
    };

    this.productosService.addProduct(producto_simulado);
    console.log('Producto agregado', producto_simulado);

    this.cargarProductos();
  }

  eliminarProducto(id: number) {
    const isDeleted = this.productosService.deleteProductById(id);
    if (isDeleted) {
      this.cargarProductos();
    }
  }
}
