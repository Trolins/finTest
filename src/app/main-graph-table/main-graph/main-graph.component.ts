import { Component, Input } from '@angular/core';
import { FinanceData } from 'src/app/models/data.model';

@Component({
  selector: 'main-graph',
  templateUrl: './main-graph.component.html',
  styleUrls: ['./main-graph.component.scss']
})
export class MainGraphComponent {
  @Input() mainData: FinanceData = new FinanceData;
}
