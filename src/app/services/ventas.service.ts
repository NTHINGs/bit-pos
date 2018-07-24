import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class VentasService extends BaseService {
  Enum = Ventas;
  url = 'assets/data/ventas.json';
  constructor(private httpClient: HttpClient,
              private tableSvc: TableService) {
    super(httpClient, tableSvc);
  }
}

// Header de la tabla
export enum Ventas {
  codigo = 'código',
  nombre = 'nombre',
  proveedor = 'proveedor',
  precios = 'precios',
  existencia = 'existencia'
}
