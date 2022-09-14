import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string | undefined;

  constructor(private messageservice: MessageService) { }

  ngOnInit(): void {
    this.messageservice.receivedMessage().subscribe((d)=>{
      this.message = d;
    })
  }

}
