import { ProductosService } from '../services/productos.service';
import { ProveedoresService } from '../services/proveedores.service';
import { ClientesService } from '../services/clientes.service';
import { VentasService } from '../services/ventas.service';

export const Tablas = {
    productos: { 
        service: ProductosService,
        dialog: null,
        form: {
            
        }
    },
    proveedores: {
        service: ProveedoresService,
        dialog: null
    },
    clientes: {
        service: ClientesService,
        dialog: null
    },
    ventas: {
        service: VentasService,
        dialog: null
    }
};