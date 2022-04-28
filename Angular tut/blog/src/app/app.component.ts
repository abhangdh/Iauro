import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Call Api in Angular....';
  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
    {
      this.api.apicall().subscribe((data)=>{
        console.warn("get api data",data);
      
      })
    }
}
