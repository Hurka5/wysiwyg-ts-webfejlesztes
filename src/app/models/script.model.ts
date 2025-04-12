export class Script {
  public name: string;
  public desc: string;
  public data: string;
  public editCode: string;

  constructor(name: string, desc: string, data: string, editCode: string) {
    this.name = name;
    this.desc = desc;
    this.data = data;
    this.editCode = editCode;
  }
}
