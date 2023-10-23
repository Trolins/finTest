import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ListData, YearData } from 'src/app/models/data.model';

@Component({
  selector: 'list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss']
})
export class ListBlockComponent {
  @Input() blockData: YearData[] = [];
  @Input() dataType: string = '';

  blockHeader: string = '';
  shownData: ListData = new ListData;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.dataType) {
      case 'main_active':
        this.blockHeader = 'Активи';
        break;
      case 'current_liabilities':
        this.blockHeader = 'Зобов’язання';
        break;
      case 'net_income':
        this.blockHeader = 'Дохід (виручка)';
        break;
      case 'net_profit':
        this.blockHeader = 'Прибуток (збиток)';
        break;
    }
    const latestRequest = changes['blockData'];
    if (this.blockData && latestRequest) {
      this.getCellInfo()
    }
  }

  getCellInfo () {
    let data = this.shownData;
    for (let i = 0; i < this.blockData.length; i++) {
      const el = this.blockData[i];
      if (!data.year) {
        data.year = el.year;
        data.dif_money = el.sum;
      } else if (data.year < el.year) {
        data.year = el.year;
        data.dif_money = parseFloat((el.sum / 1e6).toFixed(2));
        this.calculatePercent(el, this.blockData[i-1]);
      }

    }
  }

  calculatePercent (currentYear:YearData, prevYear: YearData) {
    let data = this.shownData;
    data.dif_percent = parseFloat ((Math.abs(100 - (currentYear.sum / prevYear.sum)*100)).toFixed(2));
    if (currentYear.sum > prevYear.sum) {
      data.type = 'up';
    } else {
      data.type = 'down';      
    }

  }

}
