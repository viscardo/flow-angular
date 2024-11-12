import { Component } from '@angular/core';
import { ConnectorInsideNodeComponent } from './connector-inside-node/connector-inside-node.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ConnectorInsideNodeComponent
  ]
})
export class AppComponent {
  title = 'Angular 18 Foblex Flow Example';
}
