import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-card-today-income',
  templateUrl: './card-today-income.component.html',
  styleUrls: ['./card-today-income.component.sass']
})
export class CardTodayIncomeComponent implements OnInit {
  public day_income: any;

  public lineChartData: Array<any> = [
    { data: [], label: '' }
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    lineTension: 0
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: '#28a745',
      borderColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointHoverBackgroundColor: 'rgba(0,0,0,0)',
      pointHoverBorderColor: 'rgba(0,0,0,0)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getTodayIncomeData().subscribe(data => {
      this.day_income = data;

      this.lineChartData = [
        { data: this.day_income.week_data.map(o => o.value), label: '' }
      ];
      this.lineChartLabels = this.day_income.week_data.map(o => o.name);
    });
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
