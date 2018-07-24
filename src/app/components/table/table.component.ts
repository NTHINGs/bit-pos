import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TableData, TableService } from '../../services/table.service';
import { ComplexTableDialog } from '../../dialogs/complex-table/complex-table.component';
import { Tablas } from '../../models/tablas';

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
    table = '';
    constructor(private injector: Injector,
                private router: ActivatedRoute,
                private dialog: MatDialog,
                public tableService: TableService) { }

    ngOnInit() {
        this.router.url.subscribe(
            url => {
                this.table = url[0].path;
                this.injector.get(Tablas[this.table]).getAll().subscribe(
                    (tableData: any) => {
                        this.tableData = tableData;
                    }
                );
            }
        );
    }

    open(cell, title) {
        this.dialog.open(ComplexTableDialog, {
            width: '500px',
            data: {cell, title}
        });
    }
}
