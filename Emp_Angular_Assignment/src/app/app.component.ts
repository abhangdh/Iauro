
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

  userForm : FormGroup;
  listData : any;

  constructor(private fb:FormBuilder){

    this.listData = [];

    this.userForm = this.fb.group ({
      name : ['',Validators.required],
      address : ['',Validators.required],
      email_id: ['',Validators.required],
      contactNo : ['',Validators.required],
      gender : ['',Validators.required]
    })
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
   

  ngOnInit() {

  }
}
