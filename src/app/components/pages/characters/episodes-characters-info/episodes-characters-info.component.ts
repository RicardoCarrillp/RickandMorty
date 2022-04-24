import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Episode } from 'src/interfaces/interfaces';
import { GlobalService } from 'src/services/global-service.service';
import {Location } from '@angular/common';

@Component({
  selector: 'app-episodes-characters-info',
  templateUrl: './episodes-characters-info.component.html',
  styleUrls: ['./episodes-characters-info.component.scss']
})
export class EpisodesCharactersInfoComponent implements OnInit {
  episode$: Observable<Episode>;
  constructor(private Activerouter:ActivatedRoute
    ,private CharacterService:GlobalService,
    private router: Router,

    private location:Location) { }

  ngOnInit(): void {

    this.Activerouter.params.pipe(
      take(1)
    ).subscribe(() =>{ 
      const id=this.CharacterService.IDEpisode;
      // console.log(id);
      
      
   
      
      if (id===undefined) {
        this.goBack()
        

      }else{
        this.episode$=this.CharacterService.getDetailEpisode(id);
        
      }
      
    
    }

      );


}

   goBack(): void{
    this.location.back();

  }
  goHome(): void{
    this.router.navigate(['/home'], { relativeTo: this.Activerouter });

  }
}
