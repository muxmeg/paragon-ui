import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatSlideToggleModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, CommonModule, MatIconModule, MatCardModule,
    MatButtonModule, MatInputModule, MatSlideToggleModule
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})
export class LoginModule {}
