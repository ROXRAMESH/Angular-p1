import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor() {}

  roleName: string;

  ngOnInit(): void {
    this.roleName = 'gn'
    // this.roleName = 'ds'
    // this.roleName = 'drp'
  }
}
