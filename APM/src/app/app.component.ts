import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li>
        <a class="nav-link" routerLink="/welcome" routerLinkActive="active">Home</a>
      </li>
      <li>
        <a class="nav-link" routerLink="/products" routerLinkActive="active">Product List</a>
      </li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}