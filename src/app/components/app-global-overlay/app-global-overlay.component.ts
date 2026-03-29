import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, colorPaletteOutline } from 'ionicons/icons';
import { OverlayService } from '../../services/overlay.service';

addIcons({ closeOutline, colorPaletteOutline });

@Component({
  selector: 'app-global-overlay',
  templateUrl: './app-global-overlay.component.html',
  styleUrls: ['./app-global-overlay.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
})
export class AppGlobalOverlayComponent {
  constructor(public overlay: OverlayService) {}

  selectColor(color: string) {
    this.overlay.selectColor(color);
  }

  close() {
    this.overlay.close();
  }
}
