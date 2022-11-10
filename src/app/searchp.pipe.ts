import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchp'
})
export class SearchpPipe implements PipeTransform {

  transform(list:any[],term:string): any {
    return list.filter((ele)=>ele.name?.toLowerCase().includes(term.toLowerCase()));
  }

}
