import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() select = new EventEmitter();

  contacts = [
    'hodor',
    'dany'
  ];

  selectContact(contact) {
    this.select.emit(contact);
  }
}
