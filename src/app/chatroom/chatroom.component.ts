import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {


  @ViewChild('scroller')
  private feedContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop =  this.feedContainer.nativeElement.scrollHeight;
  }
}
