import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Role} from "../model/role";
import {Constants} from "../app.constants";

@Injectable()
export class AuthService {
  private readonly REST_SERVICE_URL = Constants.REST_URL + "security/";
  currentRole: Role;

  constructor(private http: HttpClient) {
  }

  authenticateUser(name: string, password: string): Observable<Role> {
    const observable: Observable<Role> = this.http.post<Role>(this.REST_SERVICE_URL + "login",
      {name: name, password: password});
    observable.subscribe((result: Role) => { // TODO remove subscribe
      if (result) {
        this.currentRole = result;
      }
    });
    return observable;
  }
}
