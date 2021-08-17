import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  BlackListValidator,
  UserNameExistValidator,
  UserService,
  WhiteSpaceValidator,
} from "src/libs";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  registerForm: FormGroup;
  user = {
    username: "ali",
    age: 25,
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.resetForm();
  }

  save(event: any) {
    this.user = event.value;
    console.log("userr savedd", this.user);
  }

  resetForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl(this.user ? this.user.username : "", {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          BlackListValidator("ğ"),
          WhiteSpaceValidator,
        ],
        asyncValidators: [UserNameExistValidator(this.userService)],
        updateOn: "blur",
      }),
      age: new FormControl(this.user ? this.user.age : 0),
    });
  }
}
