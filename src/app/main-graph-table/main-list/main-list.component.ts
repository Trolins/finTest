import { Component, Input, SimpleChanges } from '@angular/core';
import { FinanceData, YearData } from 'src/app/models/data.model';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {
  @Input() mainData: FinanceData = new FinanceData;
  keysList = {
    current_liabilities: 'Зобов’язання',
    main_active: 'Активи',
    net_income: 'Дохід (виручка)',
    net_profit: 'Прибуток (збиток)',
  };
  listData: any = {};
  years: number[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    const latestRequest = changes['mainData'];    
    if (Object.keys(this.mainData).length != 0) {
      for (const k in this.mainData) {
        if (Object.prototype.hasOwnProperty.call(this.mainData, k)) {
          this.orderByFnc(this.mainData[k as keyof typeof this.mainData], 'desc');        
        }
      }
      this.years = this.getYears(Object.values(this.mainData)[0]);
    }
  }

  orderByFnc(value: YearData[], order:string) {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.year - b.year;
      } else if (order === "desc") {
        return b.year - a.year;
      }
      return 0;
    });
  }
  getYears (value: YearData[]) {
    let a: number[] = [];
    for (let i = 0; i < value.length; i++) {
      const el = value[i];
      a.push(el.year);
    }    
    return a;
  }

}
