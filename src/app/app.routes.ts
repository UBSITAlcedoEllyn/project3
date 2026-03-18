import { Routes } from '@angular/router';
//import { SuppliersListComponent } from './comps/suppliers-list.component';
//import { SuppliersListComponent } from './suppliers-list.component';

import { SuppliersListComponent } from './comps/suppliers-list.component/suppliers-list.component';
import { SupplierDetailsComponent } from './comps/supplier-details.component/supplier-details.component';

export const routes: Routes = [
  // 1. Default path: Redirects to /suppliers when the app first opens
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },

  // 2. The main list path
  { path: 'suppliers', component: SuppliersListComponent },

  // 3. The details path with a "parameter" (:id)
  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  // 4. Wildcard path (Optional): Redirects any unknown URL back to the list
  { path: '**', redirectTo: 'suppliers' }
];