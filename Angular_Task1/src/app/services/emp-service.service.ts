import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $Id: new FormControl(null),
    fullname: new FormControl(''),
    gender: new FormControl('1'),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl('')

  });

  initializeFormGroup(){
    this.form.setValue({
      $Id: null,
      fullName:'',
      gender:'',
      address:'',
      mobile:'',
      email:'',
      birthdate:''

    });
  }
}
