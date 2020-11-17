export class EmailParser {
  constructor(email) {
    this.email = email;
  }

  get name() {
    let mailParts = this.email.split("@");
    let name = mailParts.length == 2 ? mailParts[0] : '';
    return name;
  }

  get domain() {
    let mailParts = this.email.split("@");
    let domain = mailParts.length == 2 ? mailParts[1] : '';
    return domain;
  }

  get isCorrect() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }
}