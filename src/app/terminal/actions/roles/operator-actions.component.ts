import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-radar-data></app-action-radar-data>
  `
})
export class OperatorActionsComponent {
  constructor() {
  }
}
