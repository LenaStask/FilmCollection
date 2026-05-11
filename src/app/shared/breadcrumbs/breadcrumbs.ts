import { Component, signal, WritableSignal, inject, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, Router, NavigationEnd, RouterLinkActive } from '@angular/router';
import { FilmService } from '../../core/services/film-service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private router = inject(Router);
  private filmService = inject(FilmService);

  public readonly pathParts: WritableSignal<Array<{ path: string; label: string }>> = signal([]);

  private routerEvents = toSignal(this.router.events);
  constructor() {
    effect(() => {
      let event = this.routerEvents();
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs(event.urlAfterRedirects);
      }
    });
  }

  private readonly hiddenSegments = new Set(['film']);

  private updateBreadcrumbs(url: string) {
    const parts = url.split('/').filter(Boolean);
    const breadcrumbs: Array<{ path: string; label: string }> = [{ path: '/home', label: 'Home' }];

    let cumulativePath = '';
    for (const part of parts) {
      cumulativePath += `/${part}`;
      if (this.hiddenSegments.has(part)) continue;
      const id = Number(part);
      let label = part;
      if (!isNaN(id)) {
        const film = this.filmService.films().find((f) => f.id === id);
        if (film) label = film.title;
      }
      breadcrumbs.push({ path: cumulativePath, label });
    }

    this.pathParts.set(breadcrumbs);
  }
}
