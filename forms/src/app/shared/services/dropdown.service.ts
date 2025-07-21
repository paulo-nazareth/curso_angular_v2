import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';

import { EstadosBr } from 'app/shared/models/estado-br';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBR(){
    return this.http.get<EstadosBr[]>('assets/dados/estados_br.json');
  }

}
