import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService extends BaseService {
  Enum = Productos;
  url = 'assets/data/productos.json';
  constructor(private httpClient: HttpClient,
              private tableSvc: TableService) {
    super(httpClient, tableSvc);
  }
}

// Header de la tabla
export enum Productos {
  codigo = 'código',
  nombre = 'nombre',
  proveedor = 'proveedor',
  precios = 'precios',
  existencia = 'existencia'
}
