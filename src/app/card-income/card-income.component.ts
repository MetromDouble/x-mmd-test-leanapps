import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-card-income',
  templateUrl: './card-income.component.html',
  styleUrls: ['./card-income.component.sass']
})
export class CardIncomeComponent implements OnInit {
  public income: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getTotalIncomeData().subscribe(data => {
      this.income = data;
    });
  }

}
