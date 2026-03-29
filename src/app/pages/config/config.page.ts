import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cameraOutline,
  closeOutline,
  colorPaletteOutline,
  documentTextOutline,
  readerOutline,
  settingsOutline,
  moonOutline,
  homeOutline,
} from 'ionicons/icons';
import { AppNavFooterComponent } from '../../components/app-nav-footer/app-nav-footer.component';
import { OverlayService } from '../../services/overlay.service';

addIcons({
  cameraOutline,
  closeOutline,
  colorPaletteOutline,
  documentTextOutline,
  readerOutline,
  settingsOutline,
  moonOutline,
  homeOutline,
});

/**
 * Tela principal de configurações.
 */
@Component({
  selector: 'app-config',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonToggle,
    AppNavFooterComponent,
  ],
})
export class ConfigPage implements OnInit {
  temaAtivo = true;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.loadPreferences();
  }

  // 🔹 Carrega preferências salvas
  loadPreferences() {
    try {
      const savedTheme = localStorage.getItem('cartao-config-tema');
      const savedColor = localStorage.getItem('cartao-config-cor');
      this.temaAtivo = savedTheme !== null ? savedTheme === 'true' : true;
      if (savedColor) {
        this.overlayService.selectColor(savedColor);
      }
      this.applyTheme();
    } catch {
      this.temaAtivo = true;
    }
  }

  // 🔹 Aplica tema no body usando Ionic dark class
  applyTheme() {
    const body = document.body;
    body.classList.toggle('dark', this.temaAtivo);
  }

  // 🔥 CORREÇÃO PRINCIPAL AQUI
  onThemeToggle(event: any) {
    this.temaAtivo = event.detail.checked; // ✅ correto
    this.applyTheme();
  }

  // 🔹 Salvar configurações
  savePreferences() {
    try {
      localStorage.setItem('cartao-config-tema', String(this.temaAtivo));
      localStorage.setItem('cartao-config-cor', this.overlayService.selectedColor);
      this.messageType = 'success';
      this.message = 'Preferências salvas com sucesso.';
    } catch {
      this.messageType = 'error';
      this.message = 'Falha ao salvar preferências.';
    }
  }

  openColorPanel() {
    this.overlayService.open();
  }
}