import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
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
}
