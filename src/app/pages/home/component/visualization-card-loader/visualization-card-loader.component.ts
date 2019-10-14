import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import {
  getAnalyticsLoading,
  getFavoriteLoading,
  getExtensionLoading,
} from 'src/app/store/selectors';

@Component({
  selector: 'app-visualization-card-loader',
  templateUrl: './visualization-card-loader.component.html',
  styleUrls: ['./visualization-card-loader.component.css'],
})
export class VisualizationCardLoaderComponent implements OnInit {
  @Input()
  visualizationType: string;
  @Input()
  height: string;
  @Input()
  name: string;
  @Input()
  message: string;
  tableCellCounts: any[];
  chartBars: any[];
  status: string;

  constructor() {
    this.tableCellCounts = _.range(10);
    this.chartBars = ['70', '30', '80', '10', '30', '60'];
    this.height = '400px';
  }

  ngOnInit() { }
}
