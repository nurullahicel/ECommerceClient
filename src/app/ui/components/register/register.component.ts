import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from '../../../entities/user';
import { UserService } from '../../../services/common/models/user.service';
import { Create_User } from '../../../contracts/users/create_user';

import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from '../../../services/ui/custom-toastr.service';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends BaseComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: CustomToastrService,
    spinner:NgxSpinnerService
  ) {super(spinner)}
  frm: FormGroup;
  ngOnInit(): void {
    this.frm = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(2),
          ],
        ],
        surname: [
          '',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(2),
          ],
        ],
        username: [
          '',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(2),
          ],
        ],
        email: [
          '',
          [Validators.required, 
            Validators.maxLength(30), 
            Validators.email],
        ],
        password: [
          '',
          [
            Validators.required,
            // Validators.maxLength(20),
            // Validators.minLength(8)
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            // Validators.maxLength(20),
            // Validators.minLength(8)
          ],
        ],
      },
      {
        validators: (group: AbstractControl): ValidationErrors | null => {
          let pass = group.get('password').value;
          let confirmPass = group.get('confirmPassword').value;
          return pass === confirmPass ? null : { notSame: true };
        },
      }
    );
  }
 
 
  get component() {
    return this.frm.controls;
  }
 
  submitted: boolean = false;  
  async onSubmit(user: User) {
    this.submitted = true;
    if (this.frm.invalid) 
      return;

    const result: Create_User = await this.userService.create(user);

    if (result.succeeded) 
      {this.toastrService.message(result.message,
        'Successful User Registration',
        {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight,
        }
      );}
    
    else 
    {this.toastrService.message(result.message, 
      'Failed User Registration', 
      {
       messageType: ToastrMessageType.Error,
       position: ToastrPosition.TopRight,
    });}
    
  
  
      
} 
 
}
