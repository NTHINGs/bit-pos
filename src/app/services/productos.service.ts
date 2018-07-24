import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient,
              private tableService: TableService) { }

  getAll() {
    return this.http.get('assets/data/productos.json')
      .pipe(map( productos => this.tableService.getTableData(productos, Productos))
    );
  }
}

export enum Productos {
  codigo = 'código',
  nombre = 'nombre',
  proveedor = 'proveedor',
  precios = 'precios',
  existencia = 'existencia'
}
