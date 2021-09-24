import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProduitsComponent } from 'src/app/pages/produits/produits.component';
import { CommandesComponent } from 'src/app/pages/commandes/commandes.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { CompteComponent } from 'src/app/pages/compte/compte.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'produits',   component: ProduitsComponent },
    { path: 'commandes',         component: CommandesComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'compte',           component: CompteComponent }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
