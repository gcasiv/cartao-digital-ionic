import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AppGlobalOverlayComponent } from './components/app-global-overlay/app-global-overlay.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, AppGlobalOverlayComponent],
})
export class AppComponent {
  constructor() {}
}
