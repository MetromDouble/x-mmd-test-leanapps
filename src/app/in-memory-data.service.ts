import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const total_income = 1206.9;
    const activity = {
      total_visitors: 4210,
      social_visitors: 2190,
      new_visitors: 3450,
      average_per_page: 7.8,
    };
    const views = 860129;
    const day_income = {
      week_data: [
        { name: 'Monday', value: 540 },
        { name: 'Tuesday', value: 810 },
        { name: 'Wednesday', value: 2050 },
        { name: 'Thursday', value: 1560 },
        { name: 'Friday', value: 1280 },
        { name: 'Saturday', value: 1220 },
        { name: 'Sunday', value: 230 },
      ],
      week_total: 7690,
      today_data: [
        { name: '11:00', value: 25 },
        { name: '12:00', value: 25 },
        { name: '13:00', value: 15 },
        { name: '14:00', value: 20 },
        { name: '15:00', value: 35 },
        { name: '16:00', value: 24 },
        { name: '17:00', value: 10 },
        { name: '18:00', value: 14 },
        { name: '19:00', value: 32 },
        { name: '20:00', value: 30 },
      ],
      today_total: 230,
    };
    return {
      total_income,
      activity,
      day_income,
      views,
    };
  }
}
