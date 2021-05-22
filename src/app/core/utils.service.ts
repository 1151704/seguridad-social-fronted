import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(){}

  stringEnumToKeyValue(stringEnum: string) {
    const keyValue = [];
    const keys = Object.keys(stringEnum).filter((value, index) => {
      value = value;
      return !(index % 2);
    });

    for (const k of keys) {
      keyValue.push({ key: k, value: stringEnum[k] });
    }

    return keyValue;
  }

  downloadFile(data: any, nombre: string, format: string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `${nombre}.${format}`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
    Swal.close();
  }
}
