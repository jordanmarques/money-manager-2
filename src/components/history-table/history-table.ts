import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'history-table',
  templateUrl: 'history-table.html'
})
export class HistoryTableComponent implements OnInit{

  @Input() operations: any[];

  constructor() {}

  ngOnInit(): void {
    this.operations = [];
  }
}
