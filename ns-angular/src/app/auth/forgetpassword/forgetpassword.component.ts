import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  constructor(private router: Router) {}

  navigateTO(pageName : string) {
    this.router.navigate([pageName]);
  }
}
