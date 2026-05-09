import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private http = inject(HttpClient);
  private jsonUrl = 'films.json';

  films = signal<Film[]>([]);

  getFilms() {
    this.http.get<Film[]>(this.jsonUrl).subscribe((data) => {
      this.films.set(data);
      console.log('Films loaded successfully');
    });
  }

  toggleFavorite(film: Film) {
    this.films.update((currentFilms) =>
      currentFilms.map((f) => (f.id === film.id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }
}
