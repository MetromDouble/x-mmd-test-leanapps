import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.sass']
})
export class CardActivityComponent implements OnInit {
  public activity: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getActivityData().subscribe(data => {
      this.activity = data;
    });
  }

}
