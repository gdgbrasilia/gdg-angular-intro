import {Component, OnInit} from '@angular/core';
import {UserModel} from '../models/user.model';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserModel[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.users
      .subscribe((users: UserModel[]) => this.users = users);
  }

}
