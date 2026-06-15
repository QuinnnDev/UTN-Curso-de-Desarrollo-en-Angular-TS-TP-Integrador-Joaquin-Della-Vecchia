import { Injectable } from '@angular/core';

/*
Compartir informacion: al ser singletons puedenm compartir informacion entre componentes y solo ellos comparten esta informacion.
*/

/*
Como mi servicio maneja usuarios, me interesa definir que es un usuario en la app
Para eso usamos una interface 
*/

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  fechaNacimiento: Date;
  dinero: number;
  IsOnline: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Usuarios {
  private listaUsuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Hatsune Miku',
      correo: 'hatsune.miku@example.com',
      rol: 'user',
      fechaNacimiento: new Date(1990, 0, 1),
      dinero: 1000,
      IsOnline: true,
    },
    {
      id: 2,
      nombre: 'Kasane Teto',
      correo: 'kasane.teto@example.com',
      rol: 'user',
      fechaNacimiento: new Date(1990, 0, 1),
      dinero: 1000,
      IsOnline: false,
    },
    {
      id: 3,
      nombre: 'Akita Neru',
      correo: 'akita.neru@example.com',
      rol: 'user',
      fechaNacimiento: new Date(1990, 0, 1),
      dinero: 1000,
      IsOnline: false,
    }
  ];

  getUsers() {
    return [...this.listaUsuarios];
  }

  getUserById(id: number): Usuario | undefined {
    return this.listaUsuarios.find((usuario) => {
        return usuario.id === id
      });
  }

  addUser(usuario_raw: Omit<Usuario, 'id'>): Usuario {
    const new_user_id =
      this.listaUsuarios.length > 0
        ? Math.max(...this.listaUsuarios.map((user) => user.id)) + 1
        : -1;

    const new_user: Usuario = {
      id: new_user_id,
      ...usuario_raw,
    };

    this.listaUsuarios.push(new_user);
    return new_user;
  }

  toggleUserOnlineStatus(id: number): Usuario | undefined {
    const user = this.listaUsuarios.find((usuario) => {
      return usuario.id === id
    });

    if(user){
      user.IsOnline = !user.IsOnline
    }
    return user;
  }

  deleteUserbyId(idToFind: number): boolean {
    const original_length = this.listaUsuarios.length;
    this.listaUsuarios = this.listaUsuarios.filter((usuario) => {
      return usuario.id !== idToFind;
    });
    return this.listaUsuarios.length < original_length;
  }
}
