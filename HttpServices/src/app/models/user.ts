export class User {
  // generate Id randomly
  public id: number = parseInt(
    ((1 + Math.random() * 0x10000) | 0).toString(16).substring(1)
  );
  public fname: string;
  public lname: string;
  public email: string;

  constructor(fname: string, lname: string, email: string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
  }
}
