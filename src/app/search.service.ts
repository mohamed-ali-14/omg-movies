import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSource = new BehaviorSubject<string>('');
  search = this.searchSource.asObservable()
  constructor() { }
  changeSearch(name: string) {
    this.searchSource.next(name);
  }
}
