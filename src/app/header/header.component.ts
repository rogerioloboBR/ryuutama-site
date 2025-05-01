import { Component } from '@angular/core';
// Se estiver usando Standalone Components:
import { RouterModule } from '@angular/router'; // Necessário para routerLink, routerLinkActive
import { CommonModule } from '@angular/common'; // Se usar *ngIf, *ngFor, etc.

@Component({
  selector: 'app-header',
  standalone: true, // Descomente se for standalone
  imports: [RouterModule, CommonModule], // Descomente se for standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // ou .scss
})
export class HeaderComponent {
  // Lógica do componente (se necessária) vai aqui
}
