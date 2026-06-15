import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  descuento: number;
}

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Rolling Girl feat. Hatsune Miku',
      descripcion: 'Hatsune Miku song',
      precio: 1750,
      descuento: 0,
    },
    {
      id: 2,
      nombre: 'Machine Love feat. Kasane Teto',
      descripcion: 'Kasane Teto song',
      precio: 2100,
      descuento: 5,
    },
  ];

  getProducts() {
    return [...this.listaProductos];
  }

  getProductById(id: number): Producto | undefined {
    return this.listaProductos.find((producto) => {
      return producto.id === id;
    });
  }

  addProduct(producto_raw: Omit<Producto, 'id'>): Producto {
    const new_product_id =
      this.listaProductos.length > 0
        ? Math.max(...this.listaProductos.map((product) => product.id)) + 1
        : -1;

    const new_product: Producto = {
      id: new_product_id,
      ...producto_raw,
    };

    this.listaProductos.push(new_product);
    return new_product;
  }

  deleteProductById(idToFind: number): boolean {
    const original_length = this.listaProductos.length;
    this.listaProductos = this.listaProductos.filter((producto) => {
      return producto.id !== idToFind;
    });
    return this.listaProductos.length < original_length;
  }
}
