export class Message {
    constructor(public text: string, public contact: string) {
    }
}

export class Chat {
    constructor(contact: string) {
        this.contact = contact;
    }

    messages: Message[] = [];
    contact: string;

    send(text: string): void {
        const message = new Message(text, this.contact);
        this.messages.push(message);
    }
}
