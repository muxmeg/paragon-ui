import {Component, Input} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";
import {AuthService} from "../../shared/authentication.service";
import {RoleParameter} from "../../model/roleParameter";

@Component({
  selector: "app-action-generator-activation",
  templateUrl: "generator-activation.component.html"
})

export class GeneratorActivationComponent {

  @Input()
  usageLimit: number;
  useCount: number;

  constructor(private immediateTaskService: ImmediateTaskService, authService: AuthService) {
    const parameter: RoleParameter
      = authService.currentRole.roleParameters.find(value => value.name === "generatorActivation");
    this.useCount = parameter ? Number.parseInt(parameter.value) : 0;
  }
  onPress(): void {
    this.useCount++;
    this.immediateTaskService.generatorActivation();
  }
}
