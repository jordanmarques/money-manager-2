import { Injectable } from '@angular/core';
import {Operation} from "../../pages/operations/operation";
import { Storage } from '@ionic/storage';

@Injectable()
export class HistoryProvider {

  private readonly KEY: string = "history";

  constructor(private storage: Storage) {}

  all(): Promise<Operation[]> {
    return this.storage.get(this.KEY);
  }

  add(operation: Operation) {
    this.all().then(operations => {

      if(!operations)
        operations = [];

      operations.push(operation);
      this.storage.set(this.KEY, operations)
    })
  }

}
