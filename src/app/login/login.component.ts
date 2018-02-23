import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/role";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "login.html",
  styleUrls: [ "login.css" ]
})

export class LoginComponent {

  showException: boolean;
  role: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
  }
  login(role: string, password: string): void {
    const self = this;
    this.authService.authenticateUser(role, password).subscribe((result: Role) => {
      if (result) {
        self.showException = false;
        this.router.navigate(["/terminal"]);
        console.log(this.authService.currentRole);
      } else {
        self.showException = true;
      }
    });
  }
}
