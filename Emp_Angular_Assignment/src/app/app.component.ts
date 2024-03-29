
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  userForm : FormGroup | undefined;
  validationMessages = {
    'name':{
      'required': 'Full name is required',
      'minlength': 'Full name must be greater than 2 characters',
      'maxlength': 'Full name must be less than 20 characters'
    },
    'address':{
      'required':'First letter is capital',
      'required':'Address is required'
    },
    
  }
  listData : any;

  constructor(private fb:FormBuilder){}

    ngOnInit()            {
  
    this.userForm = this.fb.group ({
      name : ['',Validators.required,Validators.pattern('aA-zZ')],
      address : ['',Validators.required, Validators.pattern('aA-zZ .,/"')],
      email_id: ['',Validators.required, Validators.pattern('a-z,0-9,@mail.com')],
      contactNo : ['',Validators.required, Validators.pattern('0-9')],
      gender : ['',Validators.required]
    })
  }
}

  public additem(): void{
    this.listData.push(this.userForm.value);
    console.log(this.userForm.value);
    this.userForm.reset();
  }

  reset(){
    this.userForm.reset();
  }

  removeItem(element:any){
   this.listData.forEach((value:any,index:any)=>{
     if(value == element)
     this.listData.splice(index,1);
   });
  }

   addItem(element: any){
    this.listData.push(this.userForm.value);
    console.log(this.userForm.value);
    this.userForm.reset();
    };
   

  userForm.valueChanges.subscribe((data)=>{
  this.logValidationErrors(this.userForm);
});