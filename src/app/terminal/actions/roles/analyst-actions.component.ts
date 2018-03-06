import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-ship-data></app-action-ship-data>
    <app-action-navigation-data></app-action-navigation-data>
    <app-action-meteor-storm-data></app-action-meteor-storm-data>
  `
})
export class AnalystActionsComponent {
  constructor() {
  }
}
