import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'complex-table',
    moduleId: module.id,
    templateUrl: 'complex-table.component.html',
    styleUrls: ['complex-table.component.css']
})

export class ComplexTableDialog {
    public tableData: TableData = {
        headerRow: [],
        dataRows: [[]]
    };

    constructor(public dialogRef: MatDialogRef<ComplexTableDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialog: MatDialog) {
        this.tableData.headerRow = Object.keys(data.cell);
        this.tableData.dataRows = [];
        let row = [];
        for (const key of Object.keys(data.cell)) {
            row.push(data.cell[key]);
        }
        this.tableData.dataRows.push(row);
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

    isObject(cell): boolean {
        return typeof cell === 'object';
    }
}
