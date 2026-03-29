import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface OverlayState {
  show: boolean;
  selectedColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private state = new BehaviorSubject<OverlayState>({
    show: false,
    selectedColor: '#afe607',
  });

  readonly state$ = this.state.asObservable();

  constructor() {
    try {
      const savedColor = localStorage.getItem('cartao-config-cor');
      if (savedColor) {
        this.state.next({ show: false, selectedColor: savedColor });
      }
    } catch {
      // localStorage may be unavailable in some environments
    }
    this.applyAccentColor(this.state.value.selectedColor);
  }

  get selectedColor(): string {
    return this.state.value.selectedColor;
  }

  open() {
    this.state.next({ ...this.state.value, show: true });
  }

  close() {
    this.state.next({ ...this.state.value, show: false });
  }

  selectColor(color: string) {
    this.state.next({ ...this.state.value, selectedColor: color });
    this.applyAccentColor(color);
  }

  private applyAccentColor(color: string) {
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.style.setProperty('--app-accent', color);
    }
  }
}
