import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserService } from "src/libs";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() lang: any;
  @Output() langChange: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  toogleLogin() {
    this.userService.login();
  }
}
