import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { TableComponent } from './components/table/table.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full',
    },
    {
        path: 'panel',
        component: DashboardComponent
    },
    {
        path: 'pos',
        component: UserComponent
    },
    {
        path: 'productos',
        component: TableComponent
    },
    {
        path: 'proveedores',
        component: TableComponent
    },
    {
        path: 'clientes',
        component: TableComponent
    },
    {
        path: 'ventas',
        component: TableComponent
    },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'maps',
    //     component: MapsComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'upgrade',
    //     component: UpgradeComponent
    // }
]
