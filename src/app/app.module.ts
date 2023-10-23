import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineDataComponent } from './line-data/line-data.component';
import { ListBlockComponent } from './line-data/list-block/list-block.component';
import { MainGraphTableComponent } from './main-graph-table/main-graph-table.component';
import { MainGraphComponent } from './main-graph-table/main-graph/main-graph.component';
import { MainListComponent } from './main-graph-table/main-list/main-list.component';
import { OrderByPipe } from './pipes/orderBy';
import { AbsPipe } from './pipes/abs';

@NgModule({
  declarations: [
    AppComponent,
    LineDataComponent,
    ListBlockComponent,
    MainGraphTableComponent,
    MainGraphComponent,
    MainListComponent,
    // OrderByPipe,
    // AbsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
