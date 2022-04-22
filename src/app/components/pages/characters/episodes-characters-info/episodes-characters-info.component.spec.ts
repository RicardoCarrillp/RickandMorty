import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesCharactersInfoComponent } from './episodes-characters-info.component';

describe('EpisodesCharactersInfoComponent', () => {
  let component: EpisodesCharactersInfoComponent;
  let fixture: ComponentFixture<EpisodesCharactersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesCharactersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesCharactersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
