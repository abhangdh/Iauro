import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_pipes';

  users = [{
    firstname: 'Dhanashri Abhang',
    city:'Pune',
    cityCode:'P'
  },
  {
    firstname: 'Kunal Murtadak',
    city:'Sangamner',
    cityCode:'S'
  },
  {
    firstname: 'Devansh Pharande',
    city:'Banglore',
    cityCode:'B'
  },
  {
    firstname: 'Toshinee Bhasin',
    city:'Hariyana',
    cityCode:'H'
  }];
  
}
