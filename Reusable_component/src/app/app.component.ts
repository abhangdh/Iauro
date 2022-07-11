import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusable_component';
  users = [{
    name: 'Dhanashri',
    age: 26,
    address: 'Pune'

  },
{
  name: 'Kunal',
  age: 26,
  address: 'Sangamner'
},
{
  name: 'Devansh',
  age: 26,
  address: 'Banglore'
}]
}
