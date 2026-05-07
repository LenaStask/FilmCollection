import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../core/services/film-service';
import { Film } from '../../core/models/film.model';
import { FilmCardList } from './film-card-list/film-card-list';

@Component({
  selector: 'app-home',
  imports: [FilmCardList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  filmService = inject(FilmService);

  ngOnInit() {
    this.filmService.getFilms();
  }
}
