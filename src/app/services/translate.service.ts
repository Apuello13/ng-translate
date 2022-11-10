import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private apiUrl: string = 'https://api.mymemory.translated.net/get?';
  constructor(private http: HttpClient) {}

  getTranslate(text: string) {
    return this.http.get<any>(`${this.apiUrl}q=${text}&langpair=en|es`);
  }
}
