import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'up-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  // users: User[] = [
  //   new User('Gosling, James', 'Java Developer','http://electronicdesign.com/site-files/electronicdesign.com/files/uploads/2008/12/hof-gosling-595x335.jpg'),
  //   new User('Matas, Mike', 'UX/UI Developer','http://core0.staticworld.net/images/idge/imported/imageapi/2014/05/slide_image_072312-apple-11-100281421-gallery.idge.jpg'),
  // ];

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onSelected(user: User) {
    this.userSelected.emit(user);
  }

}
