import { UserService } from './../../../component/authentication/user/user.service';
import User from '../../../models/interfaces/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/enums/perfil.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  logo = '../../../assets/logo-form-register.png';
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: [
          '',
          [
            Validators.minLength(3),
            Validators.maxLength(60),
            Validators.required
          ]
        ],
        password: [
          '',
          [
              Validators.minLength(8),
              Validators.maxLength(200),
              Validators.required
          ],
        ],
        confPassword: [
          '',
          [
              Validators.minLength(8),
              Validators.maxLength(200),
              Validators.required
          ],
        ],
      },
      {
        validators: [this.passwordAndConfPasswordEquals],
      }
    );
  }

  passwordAndConfPasswordEquals(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value ?? '';
    const confPassword = formGroup.get('confPassword')?.value ?? '';
    console.log(`Password: ${password} e Conf: ${confPassword} `);

    if(password.trim() + confPassword.trim())
      return password === confPassword ? null :{ passwordDifferent: true };

    return null;
  }

  createUser() {
    const user: User = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      confPassword: this.registerForm.controls['confPassword'].value,
      perfil: {
        id: 1,
        name: "COMMUM"
      }
    }
    this.userService.saveUser(user).subscribe((response) => {
      alert("Usuário criado com sucesso!");

    },
    (error) => {
      alert("Não foi possivel criar o usuário");
      console.log(error);
    })
  }
}
