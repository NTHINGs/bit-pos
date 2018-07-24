import { ProductosService } from "../services/productos.service";
import { ProveedoresService } from "../services/proveedores.service";
import { ClientesService } from "../services/clientes.service";
import { VentasService } from "../services/ventas.service";

export const Tablas = {
    productos: ProductosService,
    proveedores: ProveedoresService,
    clientes: ClientesService,
    ventas: VentasService
};