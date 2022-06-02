import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuComponentCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'dice' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'dice' },
    { title: 'Accordion', url: 'accordion', icon: 'dice' },
    { title: 'Ion-button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'dice' },
    { title: 'Componente - Tags', url: 'tags', icon: 'dice' },
    { title: 'Componente - Js', url: 'js', icon: 'dice' },
    { title: 'Datetime', url: 'datetime', icon: 'dice' },

  ];

  public menuNativeCollection = [
    { title: 'Camera', url: 'camera', icon: 'home' },

  ];

  public formulariosDinamicos = [
    {title: 'Formulário', url: 'formularios', icon: 'clipboard'}
  ]

  constructor() {}
}
