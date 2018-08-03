import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'creation-dialog',
    moduleId: module.id,
    templateUrl: 'creation.dialog.html',
    styleUrls: ['creation.dialog.css']
})

export class CreationDialog {

    constructor(public dialogRef: MatDialogRef<CreationDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialog: MatDialog) {
    }
}
