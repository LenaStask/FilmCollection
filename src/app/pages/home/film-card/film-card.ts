import { Component, inject, input } from '@angular/core';
import { Film } from '../../../core/models/film.model';
import { FilmService } from '../../../core/services/film-service';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();

  filmService = inject(FilmService);

  toggleFavorite(film: Film) {
    this.filmService.toggleFavorite(film);
  }
}
