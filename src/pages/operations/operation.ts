export class Operation{
  amount: number;
  comment: string;

  constructor()
  constructor(amount: number, comment: string)
  constructor(amount?: number, comment?: string){
    this.amount = amount;
    this.comment = comment;
  }
}
