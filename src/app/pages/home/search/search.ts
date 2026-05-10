import { Component, inject } from '@angular/core';
import { Autofocus } from '../../../directives/autofocus';
import { FilmService } from '../../../core/services/film-service';

@Component({
  selector: 'app-search',
  imports: [Autofocus],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  filmService = inject(FilmService);

  onSearch(query: string) {
    this.filmService.setSearchQuery(query);
  }
}
