import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {  User } from '../../../entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  frm: FormGroup;
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ]
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(2)
        ]],
      email: ['',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.email
        ]],
      password: ['',
        [
          Validators.required,          
          // Validators.maxLength(20),
          // Validators.minLength(8)
        ]
      ],
      confirmPassword: ['',[
        Validators.required,          
        // Validators.maxLength(20),
        // Validators.minLength(8)
      ]],
    },{validators : (group : AbstractControl): ValidationErrors | null =>{
      let pass=group.get("password").value;
      let confirmPass=group.get("confirmPassword").value;
      return pass===confirmPass ? null:{notSame: true}
    }});
  }
  get component(){
    return this.frm.controls;
  }
submitted:boolean=false;
  onSubmit(data: User) {
    this.submitted=true;
    if(this.frm.invalid)
        return;
    
  }
}
