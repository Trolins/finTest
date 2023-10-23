import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FinanceData, YearData } from 'src/app/models/data.model';

@Component({
  selector: 'main-graph',
  templateUrl: './main-graph.component.html',
  styleUrls: ['./main-graph.component.scss']
})
export class MainGraphComponent implements OnChanges {
  @Input() mainData: FinanceData = new FinanceData;
  keysList = {
    current_liabilities: 'Зобов’язання',
    main_active: 'Активи',
    net_income: 'Дохід (виручка)',
    net_profit: 'Прибуток (збиток)',
  };
  colorScheme = {
    current_liabilities: '#FF9E5B',
    main_active: '#03A87C',
    net_income: '#4080FF',
    net_profit: '#FF848B',
  }
  data: any = {
    labels: [],
    datasets: [],
  };
  options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {                  
              position: 'bottom',
              labels: {
                  color: '##333333'
              }
          },
          tooltip: {
            title: false,
            backgroundColor: '#FFFFFF',
            titleColor: '#333333',
            titleAlign: 'left',
            titleMarginBottom: 1,
            bodyColor: '#333333',
            color: '#333333'
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#8B8B8B',
                  font: {
                      weight: 500,
                      size: 13,
                  }
              },
              dashOffset: false,
              grid: {
                  color: '#E0E0E0',
                  display: false,
              }
          },
          y: {
            ticks: {
              color: '#333333',
              font: {
                  weight: 400,
                  size: 13,
              }
          },
              border: {
                dash: [4,2],
              },  
          }

      }
  };

    ngOnChanges(changes: SimpleChanges): void {
      const latestRequest = changes['mainData'];
      if (this.mainData && latestRequest) {
        this.dataParser(this.mainData);
      }
    }

    dataParser (d: FinanceData) {
      if (Object.keys(d).length != 0) {
        this.data.labels = this.getYears(Object.values(d)[0]);
        for (const k in d) {
          let obj: {[k: string]: any} = {};;
          if (Object.prototype.hasOwnProperty.call(d, k)) {
            const el = d[k as keyof typeof d];
            obj['label'] = this.keysList[k as keyof typeof this.keysList];
            obj['backgroundColor'] = this.colorScheme[k as keyof typeof this.colorScheme];
            obj['data'] = [];
            for (let i = 0; i < el.length; i++) {
              obj['data'].push(el[i].sum)
            }
          }
          this.data.datasets.push(obj);
        }
      }
      
    }

    orderByFnc(value: YearData[]) {
      return value.sort((a, b) => {
        return a.year - b.year;
      });
    }

    getYears (value: YearData[]) {
      let a: string[] = [];
      let arr = this.orderByFnc(value);
      for (let i = 0; i < arr.length; i++) {
        const el = value[i];
        a.push(el.year.toString());
      }    
      return a;
    }
}
