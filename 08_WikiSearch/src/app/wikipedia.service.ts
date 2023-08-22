import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';

// const observable = new Observable<number>(observer => {
//   observer.next(1);
// });

// observable.subscribe(value => {
//   console.log(value);
// });

interface WikipediaResponse {
  query: {
    search: {
      title: string,
      snippet: string,
      pageid: number
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // url => https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  constructor(private http: HttpClient) { }

  search(term: string) {
    const url = `https://en.wikipedia.org/w/api.php`;
    return this.http
      .get<WikipediaResponse>(url, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      })
      .pipe(pluck('query', 'search'));
  }
}
