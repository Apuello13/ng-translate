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
}
