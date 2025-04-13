export class Feedback {
  id: string;
  msg: string;
  rating: number;

  constructor(id: string, msg: string, rating: number) {
    this.id = id;
    this.msg = msg;
    this.rating = rating;
  }
}
