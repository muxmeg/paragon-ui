import {RoleParameter} from "./roleParameter";

export interface Role {
  name: string;
  secret: boolean;
  team: string;
  roleParameters: RoleParameter[];
}
