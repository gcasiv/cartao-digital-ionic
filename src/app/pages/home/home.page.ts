import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, radioButtonOffOutline, settingsOutline } from 'ionicons/icons';
import { AppNavFooterComponent } from '../../components/app-nav-footer/app-nav-footer.component';

addIcons({ chevronForwardOutline, radioButtonOffOutline, settingsOutline });

/**
 * Tela principal (HOME) — frame Figma **1:2**.
 * Rodapé partilhado: `app-nav-footer` (centro = Home ativo).
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonButton,
    IonIcon,
    AppNavFooterComponent,
  ],
})
export class HomePage {
  readonly fotoUrl = 'assets/minha-foto.jpg';

  readonly perfil = {
    nome: 'Gustavo Da Silva Casanova',
    turma: 'ADS0301M - CG - manhã',
    id: '25103371',
    curso: 'Análise e Desenvolvimento de Sistemas',
  } as const;
}
