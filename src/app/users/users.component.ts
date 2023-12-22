import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserInfoComponent, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
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

  newName = '';
  newEmail = '';

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
