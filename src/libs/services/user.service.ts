import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  users = ["ahmet", "kerim"];
  isLoggedIn = false;
  connection = environment.api.nestjs.role;
  constructor(private http: HttpClient) {}

  isExistName(val: string) {
    if (this.users.indexOf(val) > -1) {
      return of(true);
    } else {
      return of(false);
    }
  }

  getAllUsers() {
    return this.http.get<any>(this.connection + "user");
  }

  login() {
    const user = {
      email: "ahmetaydin@udemy.com.tr",
      password: "11111",
    };
    return this.http.post<any>(this.connection + "login", user);
  }

  logOut() {
    localStorage.removeItem("token");
  }

  getToken() {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    } else {
      this.login().subscribe((data) => {
        localStorage.setItem("token", data.value);
        this.getToken();
      });
    }
  }
}
