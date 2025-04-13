export class AsciiArt {
  name: string;
  data: string;
  cols: number;
  rows: number;

  constructor(name: string, data: string, cols: number = 1, rows: number = 1) {
    this.name = name;
    this.data = data;
    this.cols = 1;
    this.rows = 1;
  }
}
