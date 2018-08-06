import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'panel', title: 'Panel',  icon: 'ti-panel', class: 'nav-item' },
    { path: 'pos', title: 'Punto De Venta',  icon: 'ti-shopping-cart', class: 'nav-item' },
    { path: 'productos', title: 'Productos',  icon: 'ti-view-list-alt', class: 'nav-item' },
    { path: 'proveedores', title: 'Proveedores',  icon: 'ti-truck', class: 'nav-item' },
    { path: 'clientes', title: 'Clientes',  icon: 'ti-bag', class: 'nav-item' },
    { path: 'ventas', title: 'Ventas',  icon: 'ti-stats-up', class: 'nav-item' },
    // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
