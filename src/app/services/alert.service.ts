import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  public badSetence() {
    Swal.fire({
      title: 'Informacion',
      text: 'Hemos encontrado un error en su sentencia',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    });
  }

  public error() {
    Swal.fire({
      title: 'Error',
      text: 'Se h presentado un error. Intente mas tarde',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    });
  }

  public info() {
    Swal.fire({
      title: 'Informacion',
      text: 'Este aplicativo valida que se escriba de manera correcta el verbo to be en su forma afirmativa, si esta escrito correctamente se traduce el texto, de lo contario te notifica que hay un error',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    });
  }
}
