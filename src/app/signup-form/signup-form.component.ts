import {Component, OnInit} from '@angular/core';
import {emptyUserModel, UserModel} from '../models/user.model';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  formGroup: FormGroup;
  hide: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    const defaultValidators = [Validators.required, Validators.maxLength(60)];
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', defaultValidators],
      display: ['', defaultValidators],
      password: ['', defaultValidators],
      confirm_password: ['', defaultValidators],
    });

  }

  onSubmit(): void {
    const user = this.formGroup.value;
    if (user.password !== user.confirm_password) {
      this.snackBar.open('As senhas estão diferentes', 'Fechar');
    } else {
      this.authService
        .signup(user).subscribe(
        () => this.router.navigate(['chat']),
        (error) => this.snackBar.open(error.message)
      );
    }

  }
}
