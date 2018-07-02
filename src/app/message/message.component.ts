import {Component, Input, OnInit} from '@angular/core';
import {ChatMessageModel} from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  chatMessage: ChatMessageModel;

  constructor() {
  }

  ngOnInit() {
  }

}
