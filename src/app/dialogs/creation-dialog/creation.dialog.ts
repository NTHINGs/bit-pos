import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'creation-dialog',
    templateUrl: 'creation.dialog.html',
    styleUrls: ['creation.dialog.css']
})

export class CreationDialogComponent {

    constructor(public dialogRef: MatDialogRef<CreationDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialog: MatDialog) {
    }
}
