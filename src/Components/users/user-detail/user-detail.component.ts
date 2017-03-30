import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'up-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  @Input() selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
