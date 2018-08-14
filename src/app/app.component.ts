import { Component } from '@angular/core';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular5Demo';
  faListAlt = faListAlt;
  faShoppingCart = faShoppingCart;
}
