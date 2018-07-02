import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  message = new FormControl('', {updateOn: 'change'});

  constructor(
    private chat: ChatService
  ) {
  }

  ngOnInit() {
    this.message.valueChanges.subscribe(text => console.log(text));
  }

  onSubmit(inputMessage?: string): void {
    const message = inputMessage || this.message.value;
    this.chat.sendMessage(message);
  }

}
