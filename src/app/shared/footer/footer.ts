import { Component } from '@angular/core';
import { Github, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],

  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly githubIcon = Github;
}
