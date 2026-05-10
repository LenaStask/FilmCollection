import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FilmService } from '../../core/services/film-service';

@Component({
  selector: 'app-film-detail',
  imports: [],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.scss',
})
export class FilmDetail implements OnInit {
  id = input.required<number, string>({ transform: (value: string) => Number(value) });
  filmService = inject(FilmService);

  film = computed(() => {
    const films = this.filmService.films();
    return films.find((f) => f.id === this.id());
  });

  ngOnInit() {
    if (this.filmService.films().length === 0) {
      this.filmService.getFilms();
    }
  }
}
