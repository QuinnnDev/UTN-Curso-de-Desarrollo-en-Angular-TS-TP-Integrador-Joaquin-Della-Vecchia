import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DescuentoPipe } from '../../pipes/descuento-pipe';
import { Usuario, Usuarios } from '../../services/usuarios';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-usuarios',
  imports: [
    CurrencyPipe,
    DatePipe,
    RouterLink
],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {

  usuariosList: Usuario[] = []

  private usuariosService = inject(Usuarios)

  ngOnInit(){
    this.cargarUsuarios()
  }

  cargarUsuarios(): void {
    this.usuariosList = this.usuariosService.getUsers()
  }



  eliminarUsuario(id: number){
    const isDeleted = this.usuariosService.deleteUserbyId(id)
    if(isDeleted){
      this.cargarUsuarios()
    }
  }

}
