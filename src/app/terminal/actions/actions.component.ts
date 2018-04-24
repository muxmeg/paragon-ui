import {Component} from "@angular/core";
import {AuthService} from "../../shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-terminal-actions",
  template:  `
    <router-outlet></router-outlet>
  `
})
export class ActionsComponent {
  constructor(authService: AuthService, router: Router, private route: ActivatedRoute) {
    if (authService.currentRole) {
      router.navigate([authService.currentRole.name], { relativeTo: this.route });
    }
  }
}
