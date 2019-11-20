import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeContact: any;
  title = 'my-app';

  chats = new Map();

  selectContact(contact) {
    this.activeContact = contact;
  }

  isSelected(contact) {
    return this.activeContact === contact;
  }

  getChat(activeContact) {
    return this.chats.get(activeContact);
  }
}
