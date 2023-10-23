import { Component, Input } from '@angular/core';
import { FinanceData } from '../models/data.model';

@Component({
  selector: 'line-data',
  templateUrl: './line-data.component.html',
  styleUrls: ['./line-data.component.scss']
})
export class LineDataComponent  {
  @Input() data!: FinanceData;
}
