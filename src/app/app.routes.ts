import { Routes } from '@angular/router';
//import { SuppliersListComponent } from './comps/suppliers-list.component';
//import { SuppliersListComponent } from './suppliers-list.component';

import { SuppliersListComponent } from './comps/suppliers-list.component/suppliers-list.component';
import { SupplierDetailsComponent } from './comps/supplier-details.component/supplier-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },

  { path: 'suppliers', component: SuppliersListComponent },

  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  { path: '**', redirectTo: 'suppliers' }
];