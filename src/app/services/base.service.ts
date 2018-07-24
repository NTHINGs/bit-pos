import { HttpClient } from "@angular/common/http";
import { TableService } from "./table.service";
import { map } from 'rxjs/operators';

export abstract class BaseService {
    abstract Enum = null;
    abstract url = null;
    constructor(private http: HttpClient,
                private tableService: TableService) { }

    getAll(complex = false) {
        return this.http.get(this.url)
            .pipe(
                map(
                    productos => this.tableService.getTableData(productos, this.Enum, complex)
                )
            );
    }
}