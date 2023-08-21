import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import {Location } from '@angular/common';
import { Character } from 'src/interfaces/interfaces';
import { GlobalService } from 'src/services/global-service.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {
  character$: Observable<Character>;
  constructor(private Activerouter:ActivatedRoute,
    private CharacterService:GlobalService,
    private router: Router,
    private location:Location) { }

  ngOnInit(): void {
   
  
      const id=this.CharacterService.IDCharacter;
      // console.log(id);
      
      
   
      
      if (id===undefined || id===null) {
        this.goBack()
        

      }else{
        this.character$=this.CharacterService.getDetailCharacter(id);
        
      }
      
    
    }


   goBack(): void{
    this.router.navigateByUrl('/home');

  }

  public DetailsEpisode(id: string): void {
    this.CharacterService.IDEpisode = id;
    this.router.navigate(['/episode-detail'], { relativeTo: this.Activerouter });
  }
}