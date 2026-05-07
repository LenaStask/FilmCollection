import { Component, input } from '@angular/core';
import { Film } from '../../../core/models/film.model';
import { FilmCard } from '../film-card/film-card';

@Component({
  selector: 'app-film-card-list',
  imports: [FilmCard],
  templateUrl: './film-card-list.html',
  styleUrl: './film-card-list.scss',
})
export class FilmCardList {
  allFilms = input.required<Film[]>();
}
