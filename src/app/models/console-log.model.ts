export class ConsoleLog {
  msg: string;
  type: "log" | "error";

  constructor(msg: string, type: "log" | "error") {
    this.msg = msg;
    this.type = type;
  }
}
