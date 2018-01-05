import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BalanceProvider {

  constructor(private storage: Storage) {}

  update(value: number): Promise<number> {
    return this.storage.set("balance", value)
  }

  get(): Promise<number>{
    return this.storage.get("balance");
  }

}
