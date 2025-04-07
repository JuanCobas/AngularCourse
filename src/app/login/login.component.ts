import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, inject } from '@angular/core';
import {FormsModule, NgForm, NgModel } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router, RouterOutlet } from '@angular/router';
import { LoginServiceService } from './login-service.service';



@Component({
  selector: 'app-login',
  imports: [FormsModule, HoverDirective, CommonModule, EmailvalidatorDirective, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password : string = "";

  constructor(private route: Router){

  }

  private loginService= inject(LoginServiceService);

  submit():void {
    if (this.loginService.login(this.username, this.password)) {
      this.route.navigate(["rooms"])
    }
  }

}
