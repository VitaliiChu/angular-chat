import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() activeContact: string;
  @Input() contacts: string[];
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectContact(contact) {
    this.select.emit(contact);
  }

  isSelected(contact) {
    return this.activeContact === contact;
  }
}
