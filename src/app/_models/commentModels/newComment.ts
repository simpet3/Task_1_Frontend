
export class NewComment {

  messageContent: string;
  emailAddress: string;
  createTime: Date;

  constructor( messageContent: string, emailAddress: string, createTime: Date ) {
    this.messageContent = messageContent;
    this.emailAddress = emailAddress;
    this.createTime = createTime;
  }
}
