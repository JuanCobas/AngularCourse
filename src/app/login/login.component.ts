import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {FormsModule, NgForm, NgModel } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [FormsModule, HoverDirective, CommonModule, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password : string = "";

  constructor(private route: Router){

  }

  submit(submitedLogin : NgForm):void {
    if (submitedLogin.value['username'] === 'admin@gmail.com' && submitedLogin.value['password'] === 'admin') {
      this.route.navigate(["rooms", "add"])
    }
  }

}
