import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TableService } from '../../services/table.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'complex-table',
    templateUrl: 'complex-table.dialog.html',
    styleUrls: ['complex-table.dialog.css']
})

export class ComplexTableDialogComponent {
    public tableData: TableData = {
        headerRow: [],
        dataRows: [[]]
    };

    constructor(public dialogRef: MatDialogRef<ComplexTableDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialog: MatDialog,
                public tableService: TableService) {
        this.tableData = this.tableService.getTableData(data.cell, null, true);
    }

    open(cell, title) {
        this.dialog.open(ComplexTableDialogComponent, {
            width: '500px',
            data: {cell, title}
        });
    }
}
