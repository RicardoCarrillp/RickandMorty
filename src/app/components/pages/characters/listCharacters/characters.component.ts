import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Character, RequestInfo } from 'src/interfaces/interfaces';
import { GlobalService } from 'src/services/global-service.service';
import { DOCUMENT } from '@angular/common'
import { Inject } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  loading: boolean = false;
  showGoUpButton: boolean = false;
  info: RequestInfo = {
    next: '',
  };
  private page: number = 1;
  private hideScrollHeight: number = 200
  private showScrollHeight: number = 500

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterService: GlobalService,
    private route: Router,
    private activatedroute: ActivatedRoute

  ) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const Offset = window.pageYOffset;
    if ((Offset || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {

      this.showGoUpButton = true
    } else if ((Offset || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.showScrollHeight) {
      this.showGoUpButton = false
    }



  }

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
        this.characters = [...this.characters, ...results];
        this.info = info;
      } else {
        this.characters = [];
      }





    })

    this.loading = false
  }

  onScroll(): void {

    if (this.info.next !== '') {
      this.page++;
      this.getCharacters();

    }



  }

  goUp(): void {
    this.document.body.scrollTop = 0; //Para el navegador safari
    this.document.documentElement.scrollTop = 0;



  }

  public DetailsCharacter(id: number): void {
    this.characterService.IDCharacter = id;
    this.route.navigate(['/character-detail'], { relativeTo: this.activatedroute });
  }


}
