import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioGroup } from '@angular/material/radio';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  genderList = ['Male','Female']

  employeeForm !: FormGroup; 
  actionBtn : string = "save"
  dataSource: any;
  constructor(private formBuilder : FormBuilder, private api: ApiService, 
    private dialogRef : MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
     
      empname: ['', Validators.required],
      gender: ['',Validators.required],
      birthdate: ['',Validators.required],
      address: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      mobile: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      company: ['',Validators.required]
        });
    if(this.editData){
      this.actionBtn = "Update";
      this.employeeForm.controls['empname'].setValue(this.editData.empname);
      this.employeeForm.controls['gender'].setValue(this.editData.gender);
      this.employeeForm.controls['birthdate'].setValue(this.editData.birthdate);
      this.employeeForm.controls['address'].setValue(this.editData.address);
      this.employeeForm.controls['mobile'].setValue(this.editData.mobile);
      this.employeeForm.controls['email'].setValue(this.editData.email);
      this.employeeForm.controls['company'].setValue(this.editData.company);
    }
  }

  addEmployee(){
   if(!this.editData){
    if (this.employeeForm.valid){
      this.api.postEmployee(this.employeeForm.value)
      .subscribe({
        next:(res)=>{
          this.employeeForm.reset();
          this.dialogRef.close('save');
          alert("Employee added Successfully");
        },
        error:()=>{
          alert(" Error while adding the employee")
        }
      })
     }
   }else{
    this.updateEmployee()
   }
  }
  updateEmployee() {
   this.api.putEmployee(this.employeeForm.value, this.editData.id)
   .subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.employeeForm.reset();
      this.dialogRef.close('Update');
      alert("Employee Updated successfully ");
    },
    error:()=>{
      alert("Error while updating the record");
    }
   })
  }

}
