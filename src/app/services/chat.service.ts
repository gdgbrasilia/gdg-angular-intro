import {Injectable} from '@angular/core';
import {ChatMessageModel} from '../models/chat-message.model';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as _ from 'lodash';
import * as moment from 'moment';
import {filter} from 'rxjs/operators';
import {AngularFireList} from 'angularfire2/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;

  private _chatMessages: AngularFireList<ChatMessageModel | ChatMessageModel[]>;
  private chatMessage: ChatMessageModel;
  private username = '';

  // private username: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState
      .pipe(filter(auth => !_.isEmpty(auth)))
      .subscribe(auth => this.user = auth);
  }

  sendMessage(message: string): void {
    if (message) {
      const timeStamp = this.getTimeStamp();
      this._chatMessages = this.chatMessages;
      const chatMessage = {
        message: message,
        timeSent: timeStamp,
        userName: 'the user name is',
        email: 'teste@teste.com.br'
      } as ChatMessageModel;
      this._chatMessages.push(chatMessage);
      console.log(`Send messaging`, message);
    }

  }


  get chatMessages(): AngularFireList<ChatMessageModel | ChatMessageModel[]> {
    console.log('here');
    return this.db.list('messages', ref => ref.limitToFirst(25).orderByKey());

  }

  private getTimeStamp(): string {
    return moment().format();
  }
}
