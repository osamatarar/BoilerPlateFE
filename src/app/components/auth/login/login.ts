import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/app.floatingconfigurator';
import { FormBaseComponent } from '../../../core/basecompoment';
import { LoginForm, LoginFormDTO } from './loginmodel';


@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    templateUrl:'./login.html'
})
export class Login extends FormBaseComponent<LoginForm, LoginFormDTO> 
{
    public override FormModel: LoginForm = new LoginForm();
    
  
    email: string = '';
    password: string = '';
    checked: boolean = false;

   
}






