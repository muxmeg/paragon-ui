import {RouterModule, Routes} from "@angular/router";
import {TerminalComponent} from "./terminal.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {DispatcherChatComponent} from "./dispatcher-chat/dispatcher-chat.component";
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
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
import {SecondPilotActionsComponent} from "./actions/roles/second-pilot-actions.component";
import {GeneratorActivationComponent} from "./actions/generator-activation.component";
import {CoordinatorActionsComponent} from "./actions/roles/coordinator-actions.component";
import {DispatcherActionsComponent} from "./actions/roles/dispatcher-actions.component";
import {NavigationCommandsComponent} from "./actions/navigation-commands.component";
import {NavigatorActionsComponent} from "./actions/roles/navigator-actions.component";
import {SecretChatComponent} from "./secret-chat/secret-chat.component";
import {SkkActionsComponent} from "./actions/roles/skk-actions.component";
import {OperatorActionsComponent} from "./actions/roles/operator-actions.component";
import {AnalystActionsComponent} from "./actions/roles/analyst-actions.component";
import {EngineerActionsComponent} from "./actions/roles/engineer-actions.component";
import {ShipDataPanelComponent} from "./actions/ship-data-panel.component";
import {CargoPanelComponent} from "./actions/cargo-panel.component";
import {LoggedInGuard} from "./guards/LoggedInGuard";
import {EnginePanelComponent} from "./actions/engine-panel.component";
import {ScheduledTaskService} from "./scheduled-task.service";
import {MeteorStormDataComponent} from "./actions/meteor-storm-data.component";
import {WindDataComponent} from "./actions/wind-data.component";
import {GmActionsComponent} from "./actions/roles/gm-actions.component";
import {ShipManualEventsComponent} from "./actions/ship-manual-events.component";
import {RadarComponent} from "./actions/radar-data.component";
import {SplitPipe} from "./pipes/SplitPipe";

const appRoutes: Routes = [
  {
    path: "",
    component: TerminalComponent,
    canActivate: [LoggedInGuard],
    children: [{
      path: "captain",
      component: CaptainActionsComponent
    }, {
      path: "firstPilot",
      component: FirstPilotActionsComponent
    }, {
      path: "secondPilot",
      component: SecondPilotActionsComponent
    }, {
      path: "coordinator",
      component: CoordinatorActionsComponent
    }, {
      path: "navigator",
      component: NavigatorActionsComponent
    }, {
      path: "SKK",
      component: SkkActionsComponent
    }, {
      path: "dispatcher",
      component: DispatcherActionsComponent
    }, {
      path: "operator",
      component: OperatorActionsComponent
    }, {
      path: "analyst",
      component: AnalystActionsComponent
    }, {
      path: "engineer",
      component: EngineerActionsComponent
    }, {
      path: "GM",
      component: GmActionsComponent
    }]
  }
];

@NgModule({
  declarations: [
    TerminalComponent, // TODO pack into modules
    DispatcherChatComponent,
    ScrollDownDirective,
    GmChatComponent,
    PrivateChatComponent,
    ActionsComponent,
    DisableRadioComponent,
    AnchorComponent,
    NavigationDataComponent,
    NavigationPanelComponent,
    EnginePanelComponent,
    NavigationCommandsComponent,
    GeneratorActivationComponent,
    CargoPanelComponent,
    ShipDataPanelComponent,
    RadarComponent,
    WindDataComponent,
    MeteorStormDataComponent,
    ShipManualEventsComponent,
    SecretChatComponent,
    SkkActionsComponent,
    OperatorActionsComponent,
    AnalystActionsComponent,
    CaptainActionsComponent,
    FirstPilotActionsComponent,
    SecondPilotActionsComponent,
    CoordinatorActionsComponent,
    DispatcherActionsComponent,
    NavigatorActionsComponent,
    EngineerActionsComponent,
    GmActionsComponent,
    SplitPipe
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
    MatTableModule,
    MatCheckboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [RolesService, ImmediateTaskService, ScheduledTaskService, LoggedInGuard]
})
export class TerminalModule {
}
