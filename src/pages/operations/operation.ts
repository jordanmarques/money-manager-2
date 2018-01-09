export class Operation{
  amount: number;
  comment: string;
  date: Date;

  constructor()
  constructor(amount: number, comment: string, date: Date)
  constructor(amount?: number, comment?: string, date?: Date){
    this.amount = amount;
    this.comment = comment;
    this.date = date;
  }
}
