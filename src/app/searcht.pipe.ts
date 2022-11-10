import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcht'
})
export class SearchtPipe implements PipeTransform {

  transform(list:any[],term:string): any {
    return list.filter((ele)=>ele.original_name?.toLowerCase().includes(term.toLowerCase()));
  }

}
