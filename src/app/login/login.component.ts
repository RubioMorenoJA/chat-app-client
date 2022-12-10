import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      this.displayForm("sign-up-card");
  }

  private displayForm(formId: string) {
    const signUpCard = document.getElementById("sign-up-card");
    const signInCard = document.getElementById("sign-in-card");
    if (formId === "sign-up-card") {
      if (signUpCard != null) signUpCard.style.display = 'none';
      if (signInCard != null) signInCard.style.display = '';
    }
    if (formId === "sign-in-card") {
      if (signUpCard != null) signUpCard.style.display = '';
      if (signInCard != null) signInCard.style.display = 'none';
    }
  }

  public showCreateAccount() {
    this.displayForm("sign-in-card");
  }

  public showLogin() {
    this.displayForm("sign-up-card");
  }

  public submitLogin(loginForm: NgForm) {
  }

  public submitNewAccount(newAccountForm: NgForm) {
  }
}
