import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFooter, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircleOutline,
  radioButtonOffOutline,
  settingsOutline,
} from 'ionicons/icons';

addIcons({
  personCircleOutline,
  radioButtonOffOutline,
  settingsOutline,
});

/**
 * Rodapé global. O host usa `display: contents` para o `ion-footer` participar do flex
 * da página como se fosse filho direto de `.ion-page` (sem wrapper a bloquear o layout Ionic).
 *
 * Não usamos `ion-tab-button`: no core ele faz `preventDefault()` e quebra `routerLink`.
 */
@Component({
  selector: 'app-nav-footer',
  templateUrl: './app-nav-footer.component.html',
  styleUrls: ['./app-nav-footer.component.scss'],
  standalone: true,
  imports: [RouterLink, IonFooter, IonIcon],
})
export class AppNavFooterComponent {
  @Input() active: 'home' | 'sobre' | 'config' = 'home';
}
