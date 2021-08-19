import { Component, OnInit } from "@angular/core";
import { UserService } from "src/libs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  toogleLogin() {
    this.userService.login();
  }
}
