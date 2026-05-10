import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private http = inject(HttpClient);
  private jsonUrl = 'films.json';

  films = signal<Film[]>([]);

  searchQuery = signal('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.films().filter((film) => film.title.toLowerCase().includes(query));
  });

  getFilms() {
    this.http.get<Film[]>(this.jsonUrl).subscribe((data) => {
      this.films.set(data);
    });
  }

  toggleFavorite(film: Film) {
    this.films.update((currentFilms) =>
      currentFilms.map((f) => (f.id === film.id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }
}
