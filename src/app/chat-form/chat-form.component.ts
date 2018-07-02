import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  message = new FormControl();

  constructor(
    private chat: ChatService
  ) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.chat.sendMessage(this.message.value);
    this.message.setValue('');

  }
}
