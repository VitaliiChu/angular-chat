import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat/chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() chat: Chat;

  constructor() { }

  ngOnInit() {
  }

}
