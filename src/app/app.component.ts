import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-victor';
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    // Evitar scroll quando sidebar estiver aberta em dispositivos móveis
    if (this.sidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeSidebar() {
    this.sidebarOpen = false;
    document.body.classList.remove('no-scroll');
  }

  closeSidebarOnMobile() {
    // Verifica se é um dispositivo móvel (largura < 768px)
    if (window.innerWidth < 768) {
      this.closeSidebar();
    }
  }
}
