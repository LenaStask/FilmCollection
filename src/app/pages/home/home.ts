import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../core/services/film-service';
import { Film } from '../../core/models/film.model';
import { FilmCardList } from './film-card-list/film-card-list';
import { Search } from './search/search';

@Component({
  selector: 'app-home',
  imports: [FilmCardList, Search],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  filmService = inject(FilmService);

  ngOnInit() {
    this.filmService.getFilms();
  }
}
