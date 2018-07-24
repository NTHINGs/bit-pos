import { Injectable } from '@angular/core';

export declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Injectable({
  providedIn: 'root',
})
export class TableService {
    
    constructor() { }

    getTableData(data, Enum, complex = false) {
        const tableData: TableData = {
            headerRow: [],
            dataRows: []
        };

        if(!data) {
            return tableData;
        }

        if (data.length) {
            for (const object of data) {
                this.logic(object, tableData, complex, Enum);
            }
        } else {
            this.logic(data, tableData, true, null);
        }

        return tableData;
    }

    isObject(cell): boolean {
        return typeof cell === 'object';
    }

    private logic(object, tableData, complex, Enum) {
        if (!complex) {
            tableData.headerRow = Object.keys(object).map(
                key => {
                    return Enum[key];
                }
            )
        } else {
            tableData.headerRow = Object.keys(object);
        }

        const row = [];
        for (const key of Object.keys(object)) {
            row.push(object[key]);
        }
        tableData.dataRows.push(row);
    }
}