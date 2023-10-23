import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import { FinanceData } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mainData: FinanceData = new FinanceData;

  constructor(private GetDataService : GetDataService) { }

  ngOnInit(){
    this.GetDataService.getJSON().subscribe(data => {
        this.mainData = {...data};
         console.log("component - ", this.mainData);
     });
}
}
