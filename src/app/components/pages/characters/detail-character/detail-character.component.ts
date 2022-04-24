import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import {Location } from '@angular/common';
import { Character } from 'src/interfaces/character.interface';
import { GlobalService } from 'src/services/global-service.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {
  character$: Observable<Character>;
  constructor(private Activerouter:ActivatedRoute,private CharacterService:GlobalService,private location:Location) { }

  ngOnInit(): void {
    this.Activerouter.params.pipe(
      take(1)
    ).subscribe(params =>{ 
      const id=params['id'];
      this.character$=this.CharacterService.getDetailCharacter(id);
      
    
    }
      );


}

   goBack(): void{
    this.location.back();

  }
}