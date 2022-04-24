import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/interfaces/character.interface';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private http: HttpClient) { }

  getCharacters(page=1	) {
    return this.http.get<Character[]>(`${environment.UrlApi}character?page=${page}`)


  }


  getDetailCharacter(id: number) {
    return this.http.get<Character>(`${environment.UrlApi}character/${id}`)

  }

  getDetailEpisode(id: number) {
    return this.http.get<Character[]>(`${environment.UrlApi}episode/${id}`)

  }
}
