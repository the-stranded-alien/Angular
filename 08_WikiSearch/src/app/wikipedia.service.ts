import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // url => https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  constructor(private http: HttpClient) { }

  search(term: string) {
    const url = `https://en.wikipedia.org/w/api.php`;
    return this.http.get(url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}
