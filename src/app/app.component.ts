import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <app-show-counter></app-show-counter>
  <app-edit-counter></app-edit-counter>
  <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'counter';
}
