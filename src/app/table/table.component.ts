import { Component, OnInit } from '@angular/core';
import { ProductosService, Productos } from '../services/productos.service';
import { ComplexTableDialog } from '../dialogs/complex-table/complex-table.component';
import { MatDialog } from '@angular/material';
import { TableData } from '../services/table.service';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData: TableData = {
        headerRow: [],
        dataRows: []
    };
    constructor(private productosSvc: ProductosService,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.productosSvc.getAll().subscribe(
            (tableData: any) => {
                this.tableData = tableData;
            }
        );
    }

    isObject(cell): boolean {
        return typeof cell === 'object';
    }

    open(cell, title) {
        const dialogRef = this.dialog.open(ComplexTableDialog, {
            width: '500px',
            data: {cell, title}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
