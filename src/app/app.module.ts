import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { UsersComponent } from '../Components/users/users.component';
import { UserListComponent } from '../Components/users/user-list/user-list.component';
import { UserCardComponent } from '../Components/users/user-list/user-card.component';
import { UserDetailComponent } from '../Components/users/user-detail/user-detail.component';
import { NewhireListComponent } from '../Components/newhire-list/newhire-list.component';
import { NewhireListAddComponent } from '../Components/newhire-list/newhire-list-add.component';
import { UserService } from '../Services/user.service';
import { routing } from '../Routers/app.routing';
import { DropdownDirective } from '../Directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailComponent,
    NewhireListComponent,
    NewhireListAddComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
