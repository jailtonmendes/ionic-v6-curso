import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Ion-button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'dice' },

  ];

  constructor() {}
}
