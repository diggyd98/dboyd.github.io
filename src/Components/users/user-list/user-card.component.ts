import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'up-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  userId: number;

  constructor() { }

  ngOnInit() {
  }

}
