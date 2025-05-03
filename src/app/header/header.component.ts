import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core'; // Importar HostListener, OnInit, ChangeDetectorRef
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Para *ngIf

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule], // Precisa do CommonModule para *ngIf
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // ou .scss
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen = false;
  isMobileView = false;

  // Injetar ChangeDetectorRef para ajudar na detecção de mudanças
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.checkViewport();
  }

  checkViewport() {
    const wasMobile = this.isMobileView;
    // Define o breakpoint (ex: 768px) - DEVE SER O MESMO DO CSS
    this.isMobileView = window.innerWidth < 768;

    // Se deixou de ser mobile, força o fechamento do menu
    if (wasMobile && !this.isMobileView) {
      this.isMobileMenuOpen = false;
    }
    // Ajuda o Angular a detectar a mudança em isMobileView para o *ngIf
    this.cdr.detectChanges();
  }

  toggleMobileMenu(): void {
    if (this.isMobileView) { // Só permite abrir/fechar se for mobile
       this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }

  // Fecha o menu ao clicar em um link (se estiver no mobile)
  closeMobileMenu(): void {
    if (this.isMobileView) {
      this.isMobileMenuOpen = false;
    }
  }
}
