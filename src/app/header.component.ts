import { Component } from '@angular/core';

import { UserService } from '../Services/user.service';

@Component({
  selector: 'up-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private userService: UserService) {}

  onStore() {
    this.userService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.userService.fetchData();
  }

}
