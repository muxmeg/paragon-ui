import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "split"
})
export class SplitPipe implements PipeTransform {
  transform(value) {
    return value.split("");
  }
}
