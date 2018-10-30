
export class NewPost {

  title: string;
  content: string;
  emailAddress: string;
  createTime: Date;

  constructor(title:string, content:string, emailAddress:string, createTime: Date){
    this.title = title;
    this.content = content;
    this.emailAddress = emailAddress;
    this.createTime = createTime;
  }
}
