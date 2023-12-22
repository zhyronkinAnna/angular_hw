import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  name = 'Tom';

  count = 0;
  increment($event: any) {
    this.count++;
    console.log($event);
  }

  isActive = false;

  fruits = ['Orange', 'Apple', 'Kiwi'];
}
