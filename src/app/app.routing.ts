import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent } from './table/table.component';

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
