import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Constants} from "../app.constants";

@Injectable()
export class RolesService {
  private readonly REST_SERVICE_URL = Constants.REST_URL + "roles/";

  constructor(private http: HttpClient) {
  }

  findTeamMembers(team: string): Observable<Object> {
    return this.http.get(this.REST_SERVICE_URL + "names/", {params: {team}});
  }
}
