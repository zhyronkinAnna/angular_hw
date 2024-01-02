import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormControl, FormsModule, NgForm, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserInfoComponent, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {

  newName = '';
  newEmail = '';

  users = [
    {
      id: 1,
      name: 'Tom',
      email: 'tom@gmail.com',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@gmail.com',
    },
  ];

  myForm = new FormGroup({ //reactive forms
    userName : new FormControl("Tom", [Validators.required, this.userNameValidator]),
    userEmail : new FormControl("", [Validators.required, Validators.email]),
  });

  userNameValidator(control: FormControl): null | {[s:string] : boolean} {
    if(control.value === 'test'){
      return {userName: true};
    }
    return null;
  }
 
  onSubmit(myForm: NgForm) {
    this.users.push({
      id: 3,
      ...myForm.value,
    });
    //console.log(myForm.value);
    console.log(this.newName);
    console.log(this.newEmail);
  }
}
