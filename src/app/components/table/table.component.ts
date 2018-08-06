import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TableData, TableService } from '../../services/table.service';
import { ComplexTableDialogComponent } from '../../dialogs/complex-table/complex-table.dialog';
import { Tablas } from '../../models/tablas';
import { CreationDialogComponent } from '../../dialogs/creation-dialog/creation.dialog';

@Component({
    selector: 'table-cmp',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
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
                this.injector.get(Tablas[this.table].service).getAll().subscribe(
                    (tableData: any) => {
                        this.tableData = tableData;
                    }
                );
            }
        );
    }

    open(cell, title) {
        this.dialog.open(ComplexTableDialogComponent, {
            width: '500px',
            data: {cell, title}
        });
    }

    add() {
        // Specific dialog pending
        this.dialog.open(CreationDialogComponent, {
            width: '800px',
            data: {}
        });
    }
}
