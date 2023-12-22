import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent },
];
