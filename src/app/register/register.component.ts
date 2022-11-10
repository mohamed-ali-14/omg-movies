import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(90),
      Validators.min(18),
    ]),
  });

  constructor(private _AuthService: AuthService , private _Router:Router) {}
  messageError: string = '';
  register(data: FormGroup) {
    this._AuthService.signup(data.value).subscribe({
      next: (data) => {
        if (data.message == 'success') {
          this._Router.navigate(['/login'])
        } else {
          this.messageError = 'THIS EMAIL ALREADY SIGNED UP';
        }
      },
    });
  }
  ngOnInit(): void {}
}
