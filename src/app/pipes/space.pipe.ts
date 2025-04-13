import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "space",
})
export class SpacePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return "";
    return value.replace(/[\u0020\u00A0\u2000-\u200B\u3000]/g, "\u00A0");
  }
}
