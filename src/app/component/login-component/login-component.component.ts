import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {


  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit(){
    if(this.loginF.valid == true){
      alert("ok");
    }
    else alert("not ok");
    if(this.loginF.invalid) return;
  }

  typePassword='password';
  showPassword(){
    if(this.typePassword == 'password'){
      this.typePassword='text';
    }
    else this.typePassword='password';
  }
}
