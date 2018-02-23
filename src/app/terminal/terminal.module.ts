import {RouterModule, Routes} from "@angular/router";
import {TerminalComponent} from "./terminal.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {DispatcherChatComponent} from "./dispatcher-chat/dispatcher-chat.component";
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, MatTableModule,
  MatTabsModule
} from "@angular/material";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrollDownDirective} from "./scroll-down.directive";
import {GmChatComponent} from "./gm-chat/gm-chat.component";
import {PrivateChatComponent} from "./private-chat/private-chat.component";
import {RolesService} from "./roles.service";
import {ActionsComponent} from "./actions/actions.component";
import {DisableRadioComponent} from "./actions/disable-radio.component";
import {ImmediateTaskService} from "./immediate-task.service";
import {CaptainActionsComponent} from "./actions/roles/captain-actions.component";
import {AnchorComponent} from "./actions/anchor.component";
import {NavigationDataComponent} from "./actions/navigation-data.component";
import {FirstPilotActionsComponent} from "./actions/roles/first-pilot-actions.component";
import {NavigationPanelComponent} from "./actions/navigation-panel.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SecondPilotActionsComponent} from "./actions/roles/second-pilot-actions.component";
import {GeneratorActivationComponent} from "./actions/generator-activation.component";
import {CoordinatorActionsComponent} from "./actions/roles/coordinator-actions.component";
import {DispatcherActionsComponent} from "./actions/roles/dispatcher-actions.component";
import {NavigationCommandsComponent} from "./actions/navigation-commands.component";

const appRoutes: Routes = [
  { path: "",
    component: TerminalComponent,
    children: [
        {
          path: "captain",
          component: CaptainActionsComponent
        },
      {
        path: "firstPilot",
        component: FirstPilotActionsComponent
      }
  ] }
];

@NgModule({
  declarations: [
    TerminalComponent,
    DispatcherChatComponent,
    ScrollDownDirective,
    GmChatComponent,
    PrivateChatComponent,
    ActionsComponent,
    DisableRadioComponent,
    AnchorComponent,
    NavigationDataComponent,
    NavigationPanelComponent,
    NavigationCommandsComponent,
    GeneratorActivationComponent,
    CaptainActionsComponent,
    FirstPilotActionsComponent,
    SecondPilotActionsComponent,
    CoordinatorActionsComponent,
    DispatcherActionsComponent
  ],
  imports: [
    RouterModule.forChild(
      appRoutes
    ),
    CommonModule,
    MatFormFieldModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [RolesService, ImmediateTaskService]
})
export class TerminalModule { }
