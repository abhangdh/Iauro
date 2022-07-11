import { generateForwardRef } from '@angular/compiler/src/render3/util';
import { partitionArray } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';


import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('filgeInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton : any; 
  title = 'Angular_Assignment';

  employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];
  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];
  constructor(private fb: FormBuilder, private employeeService: EmployeeService){
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });

    this.employeeService.getEmployees().subscribe((res) =>{
      for(let emp of res){
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });

  }

  ngAfterViewInit(): void {
  //this.buttontemp.nativeElement.click();
  }

  addEmployee(){
    let employee: Employee = {
      firstname: this.Firstname.value,
      lastname: this.Lastname.value,
      birthday: this.Birthday.value,
      gender: this.Gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
    }
      this.employeeService.postEmployee(employee).subscribe((res)=>{
      this.employees.unshift(res);
      this.clearForm();
    });
  }
  clearForm(){
    this.Firstname.setValue('');
    this.Lastname.setValue('');
    this.Birthday.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

removeEmployee(event: any){
  this.employees.forEach((val, index)=>{
    if (val.id === parseInt(event)) {
      this.employeeService.deleteEmployee(event).subscribe((res)=>{
        this.employees.splice(index, 1);
      })
    }
  })

  }
editEmployee(event: any){
  this.employees.forEach((val, ind)=>{
    if(val.id === event){
      this.setForm(val);
    }
  });
  this.removeEmployee(event);
  this.addEmployeeButton.nativeElement.click();
  
}

setForm(emp: Employee){
  this.Firstname.setValue(emp.firstname);
  this.Lastname.setValue(emp.lastname);
  this.Birthday.setValue(emp.birthday);
  this.Gender.setValue(emp.gender);

  let educationIndex = 0;
  this.educationOptions.forEach((val, index)=>{
    if (val === emp.education) educationIndex = index;
  });
  this.Education.setValue(educationIndex);
  this.Company.setValue(emp.company);
  this.JobExperience.setValue(emp.jobExperience);
  this.Salary.setValue(emp.salary);
  this.fileInput.nativeElement.value = '';
}

  public get Firstname(): FormControl{
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get Lastname(): FormControl{
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get Birthday(): FormControl{
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl{
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl{
    return this.employeeForm.get('education') as FormControl;
  }
  public get Company(): FormControl{
    return this.employeeForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl{
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl{
    return this.employeeForm.get('salary') as FormControl;
  }
}
