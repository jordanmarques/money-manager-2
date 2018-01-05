import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BalanceProvider {

  private readonly KEY: string = "balance";

  constructor(private storage: Storage) {}

  update(value: number): Promise<number> {
    return this.storage.set(this.KEY, value)
  }

  get(): Promise<number>{
    return this.storage.get(this.KEY);
  }

}
