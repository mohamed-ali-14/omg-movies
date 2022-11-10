import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:any[],term:string): any {
    return list.filter((ele)=>ele.title?.toLowerCase().includes(term.toLowerCase()));
  }
}
 

