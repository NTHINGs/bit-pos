import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService extends BaseService {
  Enum = Proveedores;
  url = 'assets/data/proveedores.json';
  constructor(private httpClient: HttpClient,
              private tableSvc: TableService) {
    super(httpClient, tableSvc);
  }
}

// Header de la tabla
export enum Proveedores {
  nombre = 'nombre',
  direccion = 'dirección',
}
