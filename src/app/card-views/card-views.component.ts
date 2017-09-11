import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-card-views',
  templateUrl: './card-views.component.html',
  styleUrls: ['./card-views.component.sass']
})
export class CardViewsComponent implements OnInit {
  public views: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getViewsData().subscribe(data => {
      this.views = data;
    });
  }

}
