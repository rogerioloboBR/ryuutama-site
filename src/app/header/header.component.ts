// Em src/app/header/header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // ou .scss
})
export class HeaderComponent {

  scrollToSection(sectionId: string): void {
    // Encontra o elemento na página com o ID correspondente
    const element = document.getElementById(sectionId);

    if (element) {
      // Se encontrar o elemento, rola suavemente até ele
      // 'start' alinha o topo do elemento com o topo da área visível
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      console.warn(`Elemento com ID '${sectionId}' não encontrado para rolagem.`);
    }
  }

}
