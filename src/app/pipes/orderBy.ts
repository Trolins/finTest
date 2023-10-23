import { Pipe, PipeTransform } from "@angular/core";
import { YearData } from "../models/data.model";

@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(value: YearData[], order: "asc" | "desc" = "asc"): YearData[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.year - b.year;
      } else if (order === "desc") {
        return b.year - a.year;
      }
      return 0;
    });
  }
}