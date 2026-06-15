import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Usuarios } from '../../../services/usuarios';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.html',
  styleUrl: './detalle-usuario.css',
  standalone: false,
})
export class DetalleUsuario implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usuariosService = inject(Usuarios);

  usuario: Usuario | undefined;
  errorMsg = '';

  ngOnInit(): void {
    const id_user_param = this.route.snapshot.paramMap.get('id');
    if (id_user_param) {
      const id = parseInt(id_user_param);
      this.usuario = this.usuariosService.getUserById(id);
      if (!this.usuario) {
        this.errorMsg = `User with ID ${id} not found.`;
      }
    } else {
      this.errorMsg = 'No valid user ID was provided.';
    }
  }

  alternarEstadoOnline(): void {
    if (this.usuario) {
      const updatedUser = this.usuariosService.toggleUserOnlineStatus(this.usuario.id);
      if (updatedUser) {
        this.usuario = updatedUser;
        console.log(`User ${this.usuario.nombre} is now ${this.usuario.IsOnline ? 'online' : 'offline'}.`);
      } else {
        this.errorMsg = 'Failed to toggle online status.';
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/usuarios']);
  }
}
