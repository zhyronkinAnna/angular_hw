import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';
}
