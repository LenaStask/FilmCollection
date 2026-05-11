import { Component, inject, input } from '@angular/core';
import { Film } from '../../../core/models/film.model';
import { FilmService } from '../../../core/services/film-service';
import { DurationPipe } from '../../../pipes/duration-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [DurationPipe, RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  filmService = inject(FilmService);

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.filmService.toggleFavorite(this.film());
  }
}
