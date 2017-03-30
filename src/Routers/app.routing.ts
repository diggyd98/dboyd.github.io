import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../Components/users/user-list/user-list.component';
import { UserDetailComponent } from '../Components/users/user-detail/user-detail.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full'},
    { path: 'user-list', component: UserListComponent },
    // { path: 'user-details', component: UserDetailComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);