import {Injectable} from '@angular/core';
import {ChatMessageModel} from '../models/chat-message.model';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as _ from 'lodash';
import * as moment from 'moment';
import {filter, tap} from 'rxjs/operators';
import {AngularFireList} from 'angularfire2/database/interfaces';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _user: firebase.User;

  private _chatMessages: AngularFireList<ChatMessageModel | ChatMessageModel[]>;
  private chatMessage: ChatMessageModel;
  private username = '';
  private email = '';


  // private username: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState
      .pipe(filter(auth => !_.isEmpty(auth)))
      .pipe(tap(auth => this._user = auth))
      .subscribe(() => {
        this.userFromFirebase.subscribe(user => {
          this.username = user.display;
          this.email = user.email;
        });
      });
  }

  sendMessage(message: string): void {
    if (message) {
      const timeStamp = this.getTimeStamp();
      this._chatMessages = this.chatMessages;
      const chatMessage = {
        message: message,
        timeSent: timeStamp,
        userName: this.username,
        email: this.email
      } as ChatMessageModel;
      this._chatMessages.push(chatMessage);
      console.log(`Send messaging`, message);
    }
  }


  get chatMessages(): AngularFireList<ChatMessageModel | ChatMessageModel[]> {
    return this.db.list('messages', ref => ref.limitToFirst(25).orderByKey());
  }

  get userFromFirebase(): Observable<UserModel> {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path).valueChanges();
  }

  private getTimeStamp(): string {
    return moment().format();
  }


  get user(): firebase.User {
    return this._user;
  }

  get users(): Observable<UserModel | UserModel[]> {
    const path = '/users';
    return this.db.list(path).valueChanges();
  }
}
