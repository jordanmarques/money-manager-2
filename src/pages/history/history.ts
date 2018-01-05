import {Component, OnInit} from '@angular/core';
import {HistoryProvider} from "../../providers/history/history-provider";
import {Operation} from "../operations/operation";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage implements OnInit {

  private operations: Operation[];

  constructor(public historyProvider: HistoryProvider) {}

  ionViewWillEnter() {
    this.historyProvider.all().then(operations => {
      this.operations = operations.reverse()
    });
  }

  ngOnInit(): void {

  }


}
