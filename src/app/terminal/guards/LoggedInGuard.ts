import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../../shared/authentication.service";
import {isNullOrUndefined} from "util";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    if (isNullOrUndefined(this.authService.currentRole)) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
