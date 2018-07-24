import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService extends BaseService {
  Enum = Clientes;
  url = 'assets/data/clientes.json';
  constructor(private httpClient: HttpClient,
              private tableSvc: TableService) {
    super(httpClient, tableSvc);
  }
}

// Header de la tabla
export enum Clientes {
  nombre = 'nombre',
  direccion = 'dirección',
}
