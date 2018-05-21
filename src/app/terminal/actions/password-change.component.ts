import {Component, OnInit} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";
import {RolesService} from "../roles.service";

@Component({
  selector: "app-action-change-password",
  templateUrl: "password-change.component.html"
})

export class PasswordChangeComponent implements OnInit {
  newPassword: String;
  selectedRole: String;
  roles: String[];
  isSecret = true;

  constructor(private immediateTaskService: ImmediateTaskService, private rolesService: RolesService) {
  }
  ngOnInit(): void {
    this.rolesService.findTeamMembers().subscribe((result: string[]) => {
      this.roles = result;
      this.selectedRole = this.roles[0];
    });
  }
  changePassword(): void {
    if (this.newPassword) {
      this.immediateTaskService.changePassword(this.selectedRole, this.newPassword, this.isSecret);
    }
  }
}
