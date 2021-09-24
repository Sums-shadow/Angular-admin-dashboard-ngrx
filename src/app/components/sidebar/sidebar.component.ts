import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// ni-pin-3 text-orange     location

// export const ROUTES: RouteInfo[] = [
//     { path: '/dashboard', title: 'Tableau de bord',  icon: 'ni-tv-2 text-black', class: '' },
//     { path: '/icons', title: 'Produits',  icon:'ni-planet text-black', class: '' },
//     { path: '/maps', title: 'Commandes',  icon:'ni-bullet-list-67 text-black', class: '' },
//     { path: '/user-profile', title: 'Utilisateurs',  icon:'ni-circle-08 text-black', class: '' },
//     { path: '/tables', title: 'Mon compte',  icon:'ni-single-02 text-black', class: '' }
//     // { path: '/login', title: 'Message',  icon:'ni-key-25 text-info', class: '' },
//     // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
// ];
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'ni-tv-2 text-black', class: '' },
    { path: '/produits', title: 'Produits',  icon:'ni-planet text-black', class: '' },
    { path: '/commandes', title: 'Commandes',  icon:'ni-bullet-list-67 text-black', class: '' },
    { path: '/users', title: 'Utilisateurs',  icon:'ni-circle-08 text-black', class: '' },
    { path: '/compte', title: 'Mon compte',  icon:'ni-single-02 text-black', class: '' }
    // { path: '/login', title: 'Message',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[]|null=null;
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
