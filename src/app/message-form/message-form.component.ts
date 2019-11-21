import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Output() message = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newMessage: string;

  addMessage() {
    this.message.emit(this.newMessage);
    this.newMessage = '';
  }
}
