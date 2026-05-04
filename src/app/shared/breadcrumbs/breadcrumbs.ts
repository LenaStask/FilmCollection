import { Component, signal, WritableSignal, inject, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private router = inject(Router);

  public readonly pathParts: WritableSignal<Array<{ path: string; label: string }>> = signal([
    { path: '/home', label: 'home' },
  ]);

  private routerEvents = toSignal(this.router.events);
  constructor() {
    effect(() => {
      let event = this.routerEvents();
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs(event.urlAfterRedirects);
      }
    });
  }

  private updateBreadcrumbs(url: string) {
    console.log('Updating breadcrumbs for URL:', url);
    const parts = url.split('/');
    const breadcrumbs: Array<{ path: string; label: string }> = [];

    for (let i = parts.length - 1; i > 0; i--) {
      let result = '';
      for (let j = i; j > 0; j--) {
        result = `${parts[j]}/${result}`;
      }
      breadcrumbs.push({ path: result, label: parts[i] });

      console.log(breadcrumbs);
    }

    this.pathParts.set(breadcrumbs);
  }
}
