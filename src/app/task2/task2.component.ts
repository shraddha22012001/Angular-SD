import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styles: [
  ]
})
export class Task2Component implements OnInit {

 
  constructor(private fb: FormBuilder) { }

  employeeInfo = this.fb.group({
    employeeName : ['',Validators.required],
    employeeEmail:['',[Validators.required,Validators.email]],
    employeePhone:['',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
     employeeDOB:['',Validators.required],
      employeeStreet:['',Validators.required]
  })

  submitHandler(){
    if(this.employeeInfo.status==='VALID'){
      console.log(this.employeeInfo.value)
      alert("data is valid ")
    }else{
      alert("please enter valid data")
    }
    
  }

  ngOnInit(): void {
  }
}
