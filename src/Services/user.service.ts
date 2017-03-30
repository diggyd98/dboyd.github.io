import { Injectable } from '@angular/core';

import { User } from '../Components/users/user';
import { Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private users: User[] = [
    new User('Gosling, James', 'Java Developer','http://electronicdesign.com/site-files/electronicdesign.com/files/uploads/2008/12/hof-gosling-595x335.jpg'),
    new User('Matas, Mike', 'UX/UI Developer','http://core0.staticworld.net/images/idge/imported/imageapi/2014/05/slide_image_072312-apple-11-100281421-gallery.idge.jpg'),
    new User('Chinery-Hesse, Herman', 'Software Executive','https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Herman_Chinery-Hesse.jpg/300px-Herman_Chinery-Hesse.jpg'),
    new User('Thompson, John', 'Software Executive','http://savoynetwork.com/wp-content/uploads/2016/02/Annual_Shareholders_Meeting-2075.jpeg'),
    new User('Dean, Mark', 'Software Executive','https://i.ytimg.com/vi/CW2ADpj2Jr4/maxresdefault.jpg'),
    new User('Green, Frank', 'Siicon Valley Pioneer','http://www.paloaltoonline.com/news/photos/2009/december/28/11624_main.jpg'),
  ];

  constructor(private http: Http) { }

  getUsers() {
    return this.users;
  }

  storeData() {
    const body = JSON.stringify(this.users);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://angular2-5663e.firebaseio.com/users.json', body, {headers:headers});
  }

  fetchData() {
    return this.http.get('https://angular2-5663e.firebaseio.com/users.json')
    .map((response: Response) => response.json())
    .subscribe(
      (data: User[]) => {
        this.users = data;
      }
    );
  }

}
