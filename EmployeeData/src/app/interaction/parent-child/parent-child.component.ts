import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  employeeList: Array<any>= [{Id:'101',FullName:'Dhanashri',Gender:'Female',
                             Address:'Pune',Email:'abhangdh@gmail.com'},
                             {Id:'102',FullName:'Priya',Gender:'Female',
                             Address:'Nashik',Email:'priya@gmail.com'},
                             
                            ]

  constructor() { }

  ngOnInit(): void {
  }

}
