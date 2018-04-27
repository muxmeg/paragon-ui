import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {isDevMode, NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {StompConfig, StompService} from "@stomp/ng2-stompjs";
import {SharedModule} from "./shared/shared.module";
import {Constants} from "./app.constants";

const appRoutes: Routes = [
  { path: "login", loadChildren: "app/login/login.module#LoginModule" },
  { path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  { path: "terminal", loadChildren: "app/terminal/terminal.module#TerminalModule" },
  { path: "**", loadChildren: "app/login/login.module#LoginModule" }
];

const stompConfig: StompConfig = {
  // Which server?
  url: Constants.WS_URL,

  // Headers
  // Typical keys: login, passcode, host
  headers: {
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    ),
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
