import { Component, Input } from '@angular/core';
import { FinanceData } from '../models/data.model';

@Component({
  selector: 'main-graph-table',
  templateUrl: './main-graph-table.component.html',
  styleUrls: ['./main-graph-table.component.scss']
})
export class MainGraphTableComponent {
  @Input() data!: FinanceData;

  show: string = 'graph';

}
