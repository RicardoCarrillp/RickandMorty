import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Character, RequestInfo } from 'src/interfaces/character.interface';
import { GlobalService } from 'src/services/global-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  loading: boolean = false;
  info: RequestInfo = {
    next: '',
  };
  private page: number = 1;
  private hideScrollHeight: number = 200
  private showScrollHeight: number = 500

  constructor(private characterService: GlobalService, private route: Router, private activatedroute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getCharacters();

  }

  public getCharacters(): void {
    this.loading = true

    this.characterService.getCharacters(this.page).pipe(
      take(1)
    ).subscribe((response: any) => {
      if (response?.results?.length > 0) {
        const { info, results } = response;
        console.log(response);
        this.characters = [...this.characters, ...results];
        this.info = info;
      } else {
        this.characters = [];
      }





    })

    this.loading = false
  }




}
