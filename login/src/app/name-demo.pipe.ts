import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameDemo'
})
export class NameDemoPipe implements PipeTransform {

  transform(value: string,middlename:string,lastname:string): string {
    return value+" "+middlename+" "+lastname;
  }

}
