import { Component } from '@angular/core';
// Se estiver usando Standalone Components:
 import { CommonModule } from '@angular/common'; // Para usar a pipe date ou {{ currentYear }}

@Component({
  selector: 'app-footer',
  standalone: true, // Descomente se for standalone
  imports: [CommonModule], // Descomente se for standalone
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // ou .scss
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}