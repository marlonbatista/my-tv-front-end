import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/component/authentication/authentication.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  logo = environment.logo;


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [this.userAndPassswordEquals],
      }
    );
  }

  login(): void {
    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';
    this.auth.authenticate(email, password).subscribe(
      () => {
        console.log('Logou !');
        this.router.navigate(['']);
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }

  userAndPassswordEquals(formGroup: FormGroup) {
    const userName = formGroup.get('email')?.value ?? '';
    const senha = formGroup.get('password')?.value ?? '';

      return userName.trim() !== senha.trim() ? null : { senhaIgualUsuario: true };
  }
}
