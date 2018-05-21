import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class EventService {
  public refreshData$: BehaviorSubject<any>;
  constructor() {
    this.refreshData$ = new BehaviorSubject("");
  }
}
