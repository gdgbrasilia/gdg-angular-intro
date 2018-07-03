import {Component, OnInit} from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feed = this.chatService.chatMessages.valueChanges();

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
  }
}
