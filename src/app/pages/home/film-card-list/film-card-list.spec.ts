import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardList } from './film-card-list';

describe('FilmCardList', () => {
  let component: FilmCardList;
  let fixture: ComponentFixture<FilmCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCardList],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
