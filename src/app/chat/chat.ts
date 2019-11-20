export class Message {
    constructor(public text: string, public contact: string) {
    }
}

export class Chat {
    messages: Message[]
    contact: string
    send(text: string): void {
        const message = new Message(text, this.contact)
        this.messages.push(message)
    }
}