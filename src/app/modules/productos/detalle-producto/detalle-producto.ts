import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, Productos } from '../../../services/productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
  standalone: false,
})
export class DetalleProducto implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usuariosService = inject(Productos);

  producto: Producto | undefined;
  errorMsg = '';

  ngOnInit(): void {
    const id_product_param = this.route.snapshot.paramMap.get('id');
    if (id_product_param) {
      const id = parseInt(id_product_param);
      this.producto = this.usuariosService.getProductById(id);
      if (!this.producto) {
        this.errorMsg = `Product with ID ${id} not found.`;
      }
    } else {
      this.errorMsg = 'No valid product ID was provided.';
    }
  }

  goBack(): void {
    this.router.navigate(['/productos']);
  }
}
