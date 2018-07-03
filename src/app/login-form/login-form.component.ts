import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const user = this.loginForm.value;
    const emptyFunction = () => {
    };

    this.authService.login(user)
      .subscribe(
        () => this.router.navigate(['chat']),
        (error) => {
          console.log(error);
          this.snackBar.open('Usuário ou senha inválido', 'Fechar');
        }
      );
  }

}
