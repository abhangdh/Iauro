import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public _empForm: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeComponent>,
    private _empService: EmpService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void{
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this._empForm = this._formBuilder.group({
      ID: [],
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      Gender: ['',Validators.required],
      Address: ['',Validators.required],
      Mobile: ['',Validators.required],
      Email: ['',Validators.required],
      Company: ['',Validators.required],


    })
  }


  OnSubmit(){
    this._empService.addEmp(this._empForm.value);
    this.dialogRef.close();
    
  }

}
