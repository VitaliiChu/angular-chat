import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"]
})
export class MessageFormComponent {
  @Output() message = new EventEmitter();

  newMessage: string;

  addMessage() {
    this.message.emit(this.newMessage);
    this.newMessage = "";
  }
}
