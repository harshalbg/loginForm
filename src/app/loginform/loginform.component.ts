import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.loginForm= new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null, Validators.required),
    })
  }
  OnLogin(){
    console.log(this.loginForm);
    alert('Form Submitted Succesfully')
  }
  }
